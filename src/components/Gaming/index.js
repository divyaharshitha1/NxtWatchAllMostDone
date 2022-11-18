import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {IoIosClose} from 'react-icons/io'
import LoaderComponent from '../Loader'

import AppTheme from '../../context/Theme'
import FailureView from '../FailureView'

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
  ParaTag,
  HeadDiv,
  HeaderEle,
  ContentDiv,
  ImageTag,
} from './styledComponents'

class Gaming extends Component {
  state = {dataArray: [], isLoading: true, status: '', showBanner: true}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
              data-testid="gaming"
              bgColor={`${bgColor}`}
              color={`${color}`}
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
                        >
                          <SiYoutubegaming
                            size={40}
                            className={`trend-icon ${activeTheme}-icon`}
                          />
                          Gaming
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
                            <ListContainer key={item.id}>
                              <ListItem>
                                <ImageTag
                                  src={`${item.thumbnail_url}`}
                                  width="190px"
                                  alt="video thumbnail"
                                />
                              </ListItem>
                              <ListItem>
                                <ParaTag
                                  fontSize="17px"
                                  color={`${color}`}
                                  fontWeight="bold"
                                >
                                  {item.title}
                                </ParaTag>
                              </ListItem>
                              <ListItem>
                                <ParaTag
                                  fontSize="13px"
                                  color="#94a3b8"
                                  marginTop="0px"
                                >
                                  {item.view_count} Watching Worldwide
                                </ParaTag>
                              </ListItem>
                            </ListContainer>
                          </Link>
                        ))}
                      </ContentDiv>
                    </>
                  ) : (
                    <FailureView refresh={this.getVideos} />
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

export default Gaming
