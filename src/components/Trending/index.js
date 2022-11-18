import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'
import {AiFillFire} from 'react-icons/ai'
import {IoIosClose} from 'react-icons/io'
import LoaderComponent from '../Loader'

import AppTheme from '../../context/Theme'
import FailureView from '../FailureView'

import './index.css'
import {
  HomeContainer,
  BannerContainer,
  ImageEl,
  ImageContainer,
  BannerPara,
  BannerButton,
  CloseBtn,
  ListContainer,
  ListItem,
  ImageTag,
  LogoImage,
  HeadDiv,
  HeaderEle,
  ContentDiv,
  ParaTag,
} from './styledComponents'

class Trending extends Component {
  state = {dataArray: [], isLoading: true, status: '', showBanner: true}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const data = await response.json()
        await this.setState({dataArray: data.videos, status: true})
      }
    } catch {
      await this.setState({status: false})
    }
    this.setState({isLoading: false})
  }

  onCloseBtn = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  render() {
    const {dataArray, isLoading, status, showBanner} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value

          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#0f0f0f'

          return (
            <HomeContainer
              bgColor={`${bgColor}`}
              color={`${color}`}
              data-testid="trending"
            >
              {isLoading ? (
                <LoaderComponent />
              ) : (
                <>
                  {status ? (
                    <>
                      {showBanner ? (
                        <BannerContainer>
                          <ImageContainer>
                            <ImageEl
                              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                              alt="website logo"
                            />
                            <CloseBtn type="button" onClick={this.onCloseBtn}>
                              <IoIosClose size={25} />
                            </CloseBtn>
                          </ImageContainer>
                          <BannerPara>
                            Buy Nxt Watch Premium prepaid plans with UPI
                          </BannerPara>
                          <BannerButton>GET IT NOW</BannerButton>
                        </BannerContainer>
                      ) : null}

                      <HeadDiv>
                        <HeaderEle
                          bgColor={
                            activeTheme === 'light' ? '#f1f1f1' : '#181818'
                          }
                          color={`${color}`}
                          data-testid="trending"
                        >
                          <AiFillFire
                            size={40}
                            className={`trend-icon ${activeTheme}-icon`}
                          />
                          Trending
                        </HeaderEle>
                      </HeadDiv>
                      <ContentDiv>
                        {dataArray.map(item => (
                          <Link
                            to={`/videos/${item.id}`}
                            className={
                              activeTheme === 'light'
                                ? 'link-light'
                                : 'link-dark'
                            }
                            key={item.id}
                          >
                            <ListContainer>
                              <ListItem>
                                <ImageTag
                                  src={`${item.thumbnail_url}`}
                                  width="350px"
                                />
                              </ListItem>
                              <ListItem>
                                <div className="logo-div">
                                  <LogoImage
                                    src={`${item.channel.profile_image_url}`}
                                    width="30px"
                                  />
                                </div>
                                <div>
                                  <ParaTag
                                    fontSize="18px"
                                    color={`${color}`}
                                    fontWeight="700"
                                  >
                                    {item.title}
                                  </ParaTag>
                                  <ParaTag
                                    fontSize="15px"
                                    color="#94a3b8"
                                    fontWeight="500"
                                  >
                                    {item.channel.name}
                                  </ParaTag>
                                  <ParaTag
                                    fontSize="15px"
                                    color=" #94a3b8"
                                    fontWeight="500"
                                  >
                                    {' '}
                                    {item.view_count} views .{' '}
                                    <span>{item.published_at}</span>
                                  </ParaTag>
                                </div>
                              </ListItem>
                            </ListContainer>
                          </Link>
                        ))}
                      </ContentDiv>
                    </>
                  ) : (
                    <FailureView render={this.getVideos} />
                  )}
                </>
              )}
            </HomeContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Trending
