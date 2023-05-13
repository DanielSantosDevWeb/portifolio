import Person from '../../images/MyPerson.png'
import { ImgStyle } from '../components/ImgStyles'
import { HomeStyle } from './HomeStyled'

function Home() {
  return (
    <HomeStyle>
      <h1>Bem Vindo ao meu Portfolio</h1>
      <ImgStyle wid='200px' >
        <img src={Person} alt="" />
      </ImgStyle>
      <p>
        Ola Desenvolvedores!! Sejam Bem Vindo ao meu <span>portfolio</span>... aqui voçe encontra mais sobre mim, as <span>tecnologias</span> que ultilizo e meus intereses na progamaçao, Visete a aba dos <span>Meus Projetos</span> para ver os meus melhores projetos, e a aba <span>Sobre</span> para saber mais sobre min.
      </p>
    </HomeStyle>
  )
}

export default Home