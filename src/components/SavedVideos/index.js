import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'

import {MdPlaylistAdd} from 'react-icons/md'

import AppTheme from '../../context/Theme'

import {
  SavedVideosMainDiv,
  UnSavedVideosDiv,
  SavedVideosDiv,
  NotFoundHead,
  NotFoundPara,
  NoVideosImageEl,
  VideosImageEl,
  ListContainer,
  ListItems,
  MainHeader,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, savedVideos} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#000000'

          return (
            <SavedVideosMainDiv bgColor={`${bgColor}`} color={`${color}`}>
              {savedVideos.length === 0 ? (
                <UnSavedVideosDiv>
                  <NoVideosImageEl
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NotFoundHead>No saved videos found</NotFoundHead>
                  <NotFoundPara>
                    You can save your videos while watching them
                  </NotFoundPara>
                </UnSavedVideosDiv>
              ) : (
                <>
                  <MainHeader
                    bgColor={activeTheme === 'light' ? '#ffffff' : '#181818'}
                  >
                    <MdPlaylistAdd color="red" size={40} />
                    Saved Videos
                  </MainHeader>
                  {savedVideos.map(data => (
                    <Link
                      to={`/videos/${data.id}`}
                      className={
                        activeTheme === 'light' ? 'link-light' : 'link-dark'
                      }
                      key={data.title}
                    >
                      <SavedVideosDiv>
                        <VideosImageEl
                          src={data.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <ListContainer>
                          <ListItems
                            fontSize="20px"
                            color={`${color}`}
                            fontWeight="bold"
                          >
                            {data.title}
                          </ListItems>
                          <ListItems
                            fontSize="15px"
                            color=" #94a3b8"
                            fontWeight="500"
                          >
                            {data.channel.name}
                          </ListItems>
                          <ListItems
                            fontSize="13px"
                            color=" #94a3b8"
                            fontWeight="500"
                          >
                            {data.viewCount} Views . {data.publishedAt}
                          </ListItems>
                        </ListContainer>
                      </SavedVideosDiv>
                    </Link>
                  ))}
                </>
              )}
            </SavedVideosMainDiv>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default SavedVideos
