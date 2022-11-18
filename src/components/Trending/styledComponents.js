import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 30px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  @media (max-width: 767px) {
    margin-top: 24px;
    padding: 30px 0 30px 20px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-top: 20px;
  padding: 20px;
  margin-bottom: 30px;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ImageEl = styled.img`
  height: 40px;
  width: 200px;
`

export const BannerPara = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #1e293b;
  width: 350px;
  @media (max-width: 767px) {
    width: 200px;
  }
`

export const CloseBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
`

export const BannerButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border: 1px solid #1e293b;
  font-weight: bold;
  color: #1e293b;
`

export const HeadDiv = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 45px;
  }
`
export const HeaderEle = styled.h1`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 20px 0;
  padding-left: 40px;
  display: flex;
  align-items: center;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const ListItem = styled.li`
  margin-right: 20px;
  display: flex;
  cursor: pointer;
`
export const ImageTag = styled.img`
  width: ${props => props.width};
  object-fit: contain;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const LogoImage = styled.img`
  width: ${props => props.width};
  object-fit: contain;
`
export const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
`
export const ParaTag = styled.p`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`
export const ErrorImg = styled.img`
  width: 35%;
  object-fit: contain;
`
export const Head = styled.h1``
export const Para = styled.p``

export const Button = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
`
