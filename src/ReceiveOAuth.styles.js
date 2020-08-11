import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MessageBox = styled.div`
  background-color: #ffa07a;
  border-radius: 1vw;
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MessageLink = styled(Link)`
  &:link {
    color: #7aceff;
  }

  &:visited {
    color: #7aceff;
  }

  &:hover {
    cursor: pointer;
    background-color: #7ad9ff;
    border-radius: 0.2vw;
    color: white;
  }
`

export { MessageBox, MessageLink }
