import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {ImCross} from 'react-icons/im'

import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

import AppTheme from '../../context/Theme'

import {
  HeaderContainer,
  HeaderContentSmContainer,
  HeaderContentLgContainer,
  ImageEl,
  ButtonEleSm,
  ButtonEleLg,
  ListContainer,
  ListItem,
  Para,
  MenuList,
  PopupContainer,
  ModalContainer,
  PopupPara,
  BtnsContainer,
  CancelBtn,
  ConfirmBtn,
} from './styledComponents'

class Header extends Component {
  state = {displayHeader: 'none'}

  showHeader = () => {
    this.setState({displayHeader: 'block'})
  }

  hideHeader = () => {
    this.setState({displayHeader: 'none'})
  }

  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onClickLogo = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {displayHeader} = this.state
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, changeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#ffffff' : '#231f20'
          const hoverBgColor = activeTheme === 'light' ? '#616e7c' : '#475569'
          const navColor = activeTheme === 'light' ? 'black' : 'white'
          const onChangeTheme = () => {
            const val = activeTheme === 'light' ? 'dark' : 'light'
            changeTheme(val)
          }

          return (
            <HeaderContainer bgColor={`${bgColor}`} data-testid="theme">
              <ImageEl
                height="25px"
                src={
                  activeTheme === 'light'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
                onClick={this.onClickLogo}
                cursor="pointer"
              />
              <HeaderContentSmContainer>
                <ButtonEleSm onClick={onChangeTheme} color={`${color}`}>
                  {activeTheme === 'light' ? (
                    <BsMoon size={25} />
                  ) : (
                    <BsBrightnessHigh size={25} />
                  )}
                </ButtonEleSm>
                <ButtonEleSm color={`${color}`} onClick={this.showHeader}>
                  <GiHamburgerMenu size={25} />
                </ButtonEleSm>
                <ModalContainer>
                  <Popup
                    modal
                    trigger={
                      <ButtonEleSm color={`${color}`}>
                        <FiLogOut size={25} />
                      </ButtonEleSm>
                    }
                    className="popup-content"
                  >
                    <PopupContainer bgColor={`${bgColor}`} color={`${color}`}>
                      <PopupPara color={`${color}`}>
                        Are you sure, you want to logout
                      </PopupPara>
                      <BtnsContainer>
                        <CancelBtn type="button">Cancel</CancelBtn>
                        <ConfirmBtn onClick={this.onLogout}>Confirm</ConfirmBtn>
                      </BtnsContainer>
                    </PopupContainer>
                  </Popup>
                </ModalContainer>
              </HeaderContentSmContainer>
              <MenuList display={displayHeader}>
                <ListContainer
                  bgColor={activeTheme === 'light' ? '#e2e8f0' : '#000000'}
                >
                  <Para onClick={this.hideHeader}>
                    <ImCross
                      color={activeTheme === 'light' ? '#000000' : '#d7dfe9'}
                    />
                  </Para>
                  <Link to="/" className={navColor}>
                    <ListItem color={`${color}`} bgColor={`${hoverBgColor}`}>
                      <HiHome className="nav-icon" /> <span>Home</span>
                    </ListItem>
                  </Link>
                  <Link to="/trending" className={navColor}>
                    <ListItem color={`${color}`} bgColor={`${hoverBgColor}`}>
                      <AiFillFire className="nav-icon" /> <span>Trending</span>
                    </ListItem>
                  </Link>
                  <Link to="/gaming" className={navColor}>
                    <ListItem color={`${color}`} bgColor={`${hoverBgColor}`}>
                      <SiYoutubegaming className="nav-icon" />
                      <span>Gaming</span>
                    </ListItem>
                  </Link>
                  <Link to="/saved-videos" className={navColor}>
                    <ListItem color={`${color}`} bgColor={`${hoverBgColor}`}>
                      <MdPlaylistAdd className="nav-icon" />
                      <span>Saved Videos</span>
                    </ListItem>
                  </Link>
                </ListContainer>
              </MenuList>
              <HeaderContentLgContainer>
                <ButtonEleLg
                  onClick={onChangeTheme}
                  color={color}
                  border="none"
                >
                  {activeTheme === 'light' ? (
                    <BsMoon size={25} />
                  ) : (
                    <BsBrightnessHigh size={25} />
                  )}
                </ButtonEleLg>
                <ImageEl
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  margin="30px"
                />
                <ModalContainer>
                  <Popup
                    modal
                    trigger={
                      <ButtonEleLg
                        color={activeTheme === 'light' ? '#3b82f6' : '#ffffff'}
                        padding="5px 15px"
                      >
                        Logout
                      </ButtonEleLg>
                    }
                    className="popup-content"
                  >
                    <PopupContainer bgColor={`${bgColor}`} color={`${color}`}>
                      <PopupPara color={`${color}`}>
                        Are you sure you want to logout?
                      </PopupPara>
                      <BtnsContainer>
                        <CancelBtn type="button">Cancel</CancelBtn>
                        <ConfirmBtn onClick={this.onLogout}>Confirm</ConfirmBtn>
                      </BtnsContainer>
                    </PopupContainer>
                  </Popup>
                </ModalContainer>
              </HeaderContentLgContainer>
            </HeaderContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default withRouter(Header)
