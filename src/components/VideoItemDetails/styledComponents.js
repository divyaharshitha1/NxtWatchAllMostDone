import styled from 'styled-components'

export const VideoContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  overflow: auto;
  padding: 20px 5px;
`
export const VideoFrameContainer = styled.div`
  width: 100%;
  overflow: auto;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ParaEle = styled.p`
  font-size: ${props => props.fontSize};
  padding-left: 20px;
  padding-bottom: ${props => props.padding};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
export const AttributesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 0;
  align-items: center;
  border-bottom: 1px solid #94a3b8;
  margin: 0 10px;
`
export const ChannelContainer = styled.div`
  display: flex;
  padding: 0px;
  align-items: center;
`
export const ContentContainer = styled.div``

export const ImageEl = styled.img`
  height: 40px;
`
export const IconParas = styled.button`
  cursor: pointer;
  color: ${props => props.iconColor};
  font-size: 15px;
  font-weight: 600;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
`
