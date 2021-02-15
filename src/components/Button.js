import styled from "styled-components"

const Button = styled.button`
  margin-top: 1em;
  margin-left: 1em;
  width: 20vw;
  height: 3em;
  color: white;
  background: #2dbed6;
  padding-left: 1em;
  font-size: 14px;
  font-weight: 600;
  border-radius: 50px;
  outline: none;
  border: none;
  &:disabled {
   background: grey;
  }
`
export default Button
