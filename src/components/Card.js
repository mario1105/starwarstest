import styled, {css} from "styled-components"

const Card = styled.div`
  height: 12vm;
  width: 22%;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 1em;
  margin-top: 1em;
  ${props => props.winner && css`
  background-color: #42f5a1;
  `}
`

export default Card
