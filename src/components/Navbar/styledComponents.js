import styled from 'styled-components'

export const DivContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: none;
  }
`
export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  @media screen and (max-width: 767px) {
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: 1;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    display: none;
  }
`
export const ListItems = styled.li`
  color: ${props => props.color};
  padding: 10px 0px;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  transition: background-color 0.5s;
  transform-origin: center center;

  :hover {
    background-color: ${props => props.bgColor};
    color: black;
    .nav-icons {
      color: red;
    }
  }
`
export const SpanEl = styled.span`
  padding: 0 10px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const ContactContainer = styled.div`
  padding-left: 18px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 800;
`
export const IconsContainer = styled.div`
  display: flex;
  padding-left: 10px;
  padding: 10px;
`
export const ContactPara = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.color};
`
