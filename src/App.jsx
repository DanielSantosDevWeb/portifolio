import { useState } from 'react'
import { Button } from './components/components/Button'
import { NavBar } from './components/layouts/NavBarStyle'
import { Container } from './components/layouts/ContainerStyle'
import { Footer } from './components/layouts/FooterStyle'
import { Body } from './components/layouts/BodyStyle'
import { Redes } from './components/components/RedesStyled'
import { Logo } from './components/components/Logo'
import Lista from './components/components/ListaRedes'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import { LinksNavStyle } from './components/components/LinksNavStyle'

function App() {
  const [count, setCount] = useState(0)
  const [RedesAberto, setRedesAberto] = useState(false)
  const [RedesWidth, setRedeswidth] = useState('45px')
  const [Arrow, setArrow] = useState(false)
  const [RedesTransl, setRedesTransl] = useState('0px')


  function modificarRedes() {
    if (RedesAberto) {
      setArrow(!Arrow)
      setRedeswidth('45px')
      setRedesTransl('0px')
      setRedesAberto(!RedesAberto)
    } else {
      setArrow(!Arrow)
      setRedeswidth('200px')
      setRedesTransl('80px')
      setRedesAberto(!RedesAberto)
    }
  }

  return (
    <>
      <Body>
        <NavBar>
          <Logo></Logo>
          <LinksNavStyle>
            <li><Link to='/' > Home </Link></li>
            <li><Link to='/projects' > Projects </Link></li>
            <li><Link to='/contact' > contato </Link></li>
          </LinksNavStyle>
          <Redes width={RedesWidth} translateY={RedesTransl}  >
            <Lista ModRedes={modificarRedes} arrow={Arrow} />
          </Redes>
        </NavBar>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Container>

        <Footer>
          footer
        </Footer>
      </Body>
    </>
  )
}



export default App
