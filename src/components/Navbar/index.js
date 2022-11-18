import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {Link} from 'react-router-dom'
import {Component} from 'react'

import AppTheme from '../../context/Theme'

import {
  DivContainer,
  ListContainer,
  ListItems,
  SpanEl,
  ContactContainer,
  ContactHeading,
  IconsContainer,
  ContactPara,
} from './styledComponents'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const hoverBgColor = activeTheme === 'light' ? '#616e7c' : '#475569'

          return (
            <DivContainer>
              <ListContainer>
                <Link to="/">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <HiHome size={20} />
                    </span>
                    <SpanEl>Home</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/trending">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <AiFillFire size={20} />
                    </span>
                    <SpanEl>Trending</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/gaming">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <SiYoutubegaming size={20} />
                    </span>
                    <SpanEl>Gaming</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/saved-videos">
                  <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                    <span className="nav-icons">
                      <MdPlaylistAdd size={20} />
                    </span>
                    <SpanEl>Saved Videos</SpanEl>
                  </ListItems>
                </Link>
              </ListContainer>
              <ContactContainer>
                <ContactHeading color={`${color}`}>CONTACT US</ContactHeading>
                <IconsContainer>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="icon"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="icon"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="icon"
                  />
                </IconsContainer>
                <ContactPara color={`${color}`}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactPara>
              </ContactContainer>
            </DivContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Navbar
