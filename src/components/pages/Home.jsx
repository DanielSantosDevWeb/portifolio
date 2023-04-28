import Person from '../../images/MyPerson.png'
import { ImgStyle } from '../components/ImgStyles'
import { HomeStyle } from './HomeStyled'

function Home() {
  return (
    <HomeStyle>
      <h1>Bem Vindo ao meu Portifolio</h1>
      <ImgStyle wid='200px' >
        <img src={Person} alt="" />
      </ImgStyle>
      <p>
        Ola Desenvolvedores!! Sejam Bem Vindo ao meu <span>portifolio</span>... aqui voçe encontra mais sobre mim, as <span>tecnologias</span> que ultilizo e meus intereses na progamaçao, Tambem tem a aba com meus <span>projetos</span> e <span>contatos</span>.
      </p>
    </HomeStyle>
  )
}

export default Home