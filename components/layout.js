import styled from 'styled-components'

const Container = styled.div`
  max-width: 1080px;
  margin: auto;
`

export default function Layout({ children }) {
  return <Container>{children}</Container>
}