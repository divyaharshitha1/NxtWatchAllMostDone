import styled, {keyframes} from 'styled-components'

const FadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    padding-bottom: 29px;
  }
`
export const HeaderContentSmContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeaderContentLgContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ImageEl = styled.img`
  cursor: ${props => props.cursor};
  @media screen and (max-width: 767px) {
    height: ${props => props.height};
    display: ${props => props.display};
  }
  @media screen and (min-width: 768px) {
    height: 30px;
    margin: 0px ${props => props.margin};
  }
`
export const ButtonEleSm = styled.button`
  background: none;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const ButtonEleLg = styled.button`
  color: ${props => props.color};
  border: ${props => props.border};
  border-color: ${props => props.color};
  background: transparent;
  outline: none;
  padding: ${props => props.padding};
  cursor: pointer;
`
export const ListContainer = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: ${props => props.bgColor};
  width: 103%;
  height: 105vh;
  top: -16px;
  left: -9px;
  padding-left: 40%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MenuList = styled.div`
  display: ${props => props.display};
  animation: ${FadeIn} 0.5s;
`
export const ListItem = styled.li`
  color: ${props => props.color};
  padding: 10px 0px;
  font-weight: bold;
  font-size: 15px;
  width: 200px;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  transition: background-color 0.5s;
  transform-origin: center center;

  :hover {
    background-color: ${props => props.bgColor};
    color: black;
    .nav-icon {
      color: red;
    }
  }
`

export const Para = styled.p`
  position: absolute;
  top: 45px;
  right: 50px;
  color: ${props => props.color};
`

export const PopupContainer = styled.div`
  width: 300px;
  border-radius: 8px;
  padding-bottom: 40px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 150px;
  @media (max-width: 767px) {
    margin-left: 0px;
  }
`
export const PopupPara = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
`

export const BtnsContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const CancelBtn = styled.button`
  background-color: transparent;
  border: 1px solid #94a3b8;
  color: #94a3b8;
  padding: 8px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 20px;
`

export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 8px;
  padding-left: 15px;
  padding-right: 15px;
`

export const ModalContainer = styled.div``
