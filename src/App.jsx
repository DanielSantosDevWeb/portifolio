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
import Sobre from './components/pages/Sobre'

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
      setRedesTransl('79px')
      setRedesAberto(!RedesAberto)
    }
  }

  return (
    <>
      <Body>
        <NavBar>
          <Logo />
          <LinksNavStyle>
            <li><Link to='/' > Inicio </Link></li>
            <li><Link to='/projects' > Projetos </Link></li>
            <li><Link to='/sobre' > Sobre </Link></li>
          </LinksNavStyle>
          <Redes width={RedesWidth} translateY={RedesTransl} className='redes' >
            <Lista ModRedes={modificarRedes} arrow={Arrow} arrowShow={true} />
          </Redes>
        </NavBar>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/sobre' element={<Sobre />} />
          </Routes>

        </Container>


      </Body>
    </>
  )
}



export default App
