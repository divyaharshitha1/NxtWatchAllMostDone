import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Roboto';
`
export const ShadowContainer = styled.div`
  padding: 40px 20px;
  box-shadow: 0px 0px 20px 5px #c6c9cc;
  border-radius: 5px;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const ImageEle = styled.img`
  width: 60%;
  margin-bottom: 20px;
  margin-left: 20%;
`
export const LoginFormContainer = styled.form``

export const FormDivContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === 'row' ? 'row' : 'column')};
  margin-top: 15px;
  align-self: center;
`
export const LabelEl = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
  color: #616e7c;
  font-size: 14px;
`
export const InputEl = styled.input`
  padding: 10px;
  outline: none;
  color: #616e7c;
  font-weight: 600;
`
export const ShowPasswordLabelEl = styled.label`
  color: #000000;
  font-weight: bold;
  font-size: 15px;
  margin-left: 8px;
`
export const ButtonEl = styled.button`
  color: #ffffff;
  font-weight: 'Roboto';
  font-size: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
  background-color: #3b82f6;
  padding: 10px;
  width: 100%;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
`
