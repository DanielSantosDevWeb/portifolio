import { useState } from 'react'
import { Button } from './components/components/Button'
import { NavBar } from './components/layouts/NavBarStyle'
import { Container } from './components/layouts/ContainerStyle'
import { Footer } from './components/layouts/FooterStyle'
import { Body } from './components/layouts/BodyStyle'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Body>
      <NavBar>
        <div>aaaaa</div>
        <div>bbbbb</div>
        <div>ccccc</div>
      </NavBar>
      <Container>
        Conteudo
      </Container>
      <Footer>
        footer
      </Footer>
    </Body>
  )
}

export default App
