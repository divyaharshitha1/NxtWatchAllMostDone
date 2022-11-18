import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  VideoFrameContainer,
  VideoContainer,
  ParaEle,
  AttributesContainer,
  ChannelContainer,
  ImageEl,
  ContentContainer,
  IconParas,
} from './styledComponents'

import AppTheme from '../../context/Theme'

import './index.css'

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    channelDataObj: {},
    liked: false,
    disliked: false,
    saved: false,
  }

  componentDidMount() {
    this.getData()
  }

  componentWillUnmount() {
    this.mounted = false
  }

  getData = async () => {
    this.mounted = true
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const responseData = await response.json()
      const data = responseData.video_details
      const convertedData = {
        channel: data.channel,
        id: data.id,
        thumbnailUrl: data.thumbnail_url,
        publishedAt: data.published_at,
        title: data.title,
        videoUrl: data.video_url,
        viewCount: data.view_count,
        description: data.description,
      }
      const channelData = {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      }
      if (this.mounted) {
        await this.setState({
          videoDetails: convertedData,
          channelDataObj: channelData,
        })
      }
    }
  }

  isDisliked = () => {
    const {liked, disliked} = this.state
    if (liked) {
      this.setState({liked: false})
    }
    if (disliked) {
      this.setState({disliked: false})
    } else {
      this.setState({disliked: true})
    }
  }

  isLiked = () => {
    const {liked, disliked} = this.state
    if (disliked) {
      this.setState({disliked: false})
    }
    if (liked) {
      this.setState({liked: false})
    } else {
      this.setState({liked: true})
    }
  }

  isSaved = async () => {
    const {saved} = this.state
    if (saved) {
      await this.setState({saved: false})
    } else {
      this.setState({saved: true})
    }
  }

  render() {
    const {videoDetails, channelDataObj, liked, disliked, saved} = this.state
    const {videoUrl, title, viewCount, publishedAt, description} = videoDetails

    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, addSavedVideos} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#0f0f0f'

          const onSaved = () => {
            this.isSaved()
            addSavedVideos(videoDetails)
          }

          return (
            <VideoContainer
              bgColor={`${bgColor}`}
              color={`${color}`}
              data-testid="videoItemDetails"
            >
              <VideoFrameContainer>
                <ReactPlayer url={videoUrl} control className="react-player" />
                <ParaEle color={`${color}`} fontWeight="bold" fontSize="15px">
                  {title}
                </ParaEle>
              </VideoFrameContainer>
              <AttributesContainer>
                <ParaEle color="#94a3b8" fontWeight="500" fontSize="13px">
                  {viewCount} . {publishedAt}
                </ParaEle>
                <ChannelContainer color={color}>
                  <IconParas
                    onClick={this.isLiked}
                    iconColor={liked ? '#2563eb' : '#64748b'}
                    color="#94a3b8"
                  >
                    <AiOutlineLike size={20} /> Like
                  </IconParas>
                  <IconParas
                    onClick={this.isDisliked}
                    iconColor={disliked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineDislike size={20} /> Dislike
                  </IconParas>
                  <IconParas
                    onClick={onSaved}
                    iconColor={saved ? '#2563eb' : '#64748b'}
                  >
                    <MdPlaylistAdd size={20} /> {saved ? 'Saved' : 'Save'}
                  </IconParas>
                </ChannelContainer>
              </AttributesContainer>
              <ChannelContainer>
                <ImageEl
                  src={channelDataObj.profileImageUrl}
                  alt="channel logo"
                />
                <ContentContainer>
                  <ParaEle>
                    <b>{channelDataObj.name}</b>
                  </ParaEle>
                  <ParaEle color="#94a3b8" fontWeight="500" fontSize="13px">
                    {channelDataObj.subscriberCount} subscribers
                  </ParaEle>
                </ContentContainer>
              </ChannelContainer>
              <p className="description">{description}</p>
            </VideoContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default VideoItemDetails
