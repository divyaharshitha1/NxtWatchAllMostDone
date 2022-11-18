import styled from 'styled-components'

export const DivEl = styled.div`
  height: 100%;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 20px 20px;
    padding-bottom: 0px;
    height: 100vh;
    overflow: hidden;
  }
`

export const ImageEl = styled.img`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const Header = styled.h1`
  font-family: 'Roboto';
  margin-top: 10px;
  margin-bottom: 0px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
`
