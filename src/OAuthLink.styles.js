import styled from 'styled-components'

const LoginBox = styled.div`
  width: 50vw;
  height: 50vh;
  display: grid;
  place-items: center;
  background-color: #ffa07a;
  border-radius: 1vw;
`

const LoginLink = styled.button`
  background-color: #7ad9ff;
  border: none;
  border-radius: 5vh;
  height: 20vh;
  width: 35vw;
  font-size: 2vw;

  &:hover {
    cursor: pointer;
  }
`

export { LoginBox, LoginLink }
