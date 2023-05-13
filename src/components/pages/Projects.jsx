import { ImgStyle } from "../components/ImgStyles";
import { ProjetcsStyle } from "./ProjectsStyled";
import projetoCostsImg from '../../images/projetos/ProjetoCostsImg.png'
import ClimaTempoImg from '../../images/projetos/ClimaTempo.png'
import SiteAndroidImg from '../../images/projetos/SiteAndroid.png'
import SiteEcommerce from '../../images/projetos/SiteEcommerce.png'
import Calculadora from '../../images/projetos/Calculadora.png'
import RickAndMortyImg from '../../images/projetos/RickAndMorty.png'
import { Projeto } from "../layouts/ProjetoStyle";
import { Button } from "../components/Button";

import { useState } from "react";

export default function Projects() {

  const [UrlProjetoCosts] = useState("https://danielsantosdevweb.github.io/projeto-costs")
  const [UrlClimatico] = useState("https://danielsantosdevweb.github.io/Projetos/clima_tempo/")
  const [UrlAndroid] = useState("https://danielsantosdevweb.github.io/Projetos/Site%20Android/")
  const [UrlEcommerce] = useState("https://danielsantosdevweb.github.io/Projetos/Site%20vendas/")
  const [UrlCalculadora] = useState("https://danielsantosdevweb.github.io/Projetos/Site%20calculadora/")
  const [UrlRickAndMorty] = useState("https://danielsantosdevweb.github.io/RickAndMorty")

  const [CodProjetoCosts] = useState('https://github.com/DanielSantosDevWeb/projeto-costs')
  const [CodAndroid] = useState('https://github.com/DanielSantosDevWeb/Projetos/tree/main/Site%20Android')
  const [CodCalculadora] = useState('https://github.com/DanielSantosDevWeb/Projetos/tree/main/Site%20calculadora')
  const [CodClimatico] = useState('https://github.com/DanielSantosDevWeb/Projetos/tree/main/clima_tempo')
  const [CodEcommerce] = useState('https://github.com/DanielSantosDevWeb/Projetos/tree/main/Site%20vendas')
  const [CodRickAndMorty] = useState('https://github.com/DanielSantosDevWeb/RickAndMorty')

  const [width, setWidth] = useState(window.innerWidth)

  addEventListener('resize', () => setWidth(window.innerWidth))

  const abrirUrl = (url) => {
    window.open(url)
  }

  return (
    <>
      <ProjetcsStyle>
        {width > 1200 ? <h1>Projetos</h1> : null}
        <Projeto>
          <div className="bloco" >
            {width > 1200 ? null : <h3>Projeto costs</h3>}
            <a href={UrlProjetoCosts} target="_blank"> <ImgStyle wid='90%' bordRad='15px' > <img src={projetoCostsImg} alt="" /> </ImgStyle>
            </a>
          </div>

          <div className="bloco" >

            {width > 1200 ? <h3>Projeto costs</h3> : null}
            <p>O Projeto Costs eh um projeto completo, ele eh um criador de projetos para <span>logisticas de empresas</span>. Usei varios recuros <span>React</span> e o <span>Json-Server</span> para o <span>Back-end</span>, Tambem o <span>React-router-dom</span> para as rotas, e o <span>React-icons</span> para icones, Podemos Criar, Editar e
              Deletar os projetos.  </p>
            <div>
              <Button onClick={() => abrirUrl(CodProjetoCosts)} >Codigo</Button>
              <Button onClick={() => abrirUrl(UrlProjetoCosts)} >Site</Button>

            </div>
          </div>

        </Projeto>

        <Projeto>
          <div className="bloco" >
            {width > 1200 ? null : <h3>Rick And Morty Api</h3>}
            <a href={UrlRickAndMorty} target="_blank"> <ImgStyle wid='90%' bordRad='15px' > <img src={RickAndMortyImg} alt="" /> </ImgStyle>
            </a>
          </div>

          <div className="bloco" >

            {width > 1200 ? <h3>Rick And Morty Api</h3> : null}
            <p> Nesse <span>projeto</span> tentei usar o maximo dessa api... nas <span>proximas versões</span> pretendo adicionar a mais infos sobre os mundos e <span>todos</span> os personagens que moram nele. Criei esse projeto com o <span>ReactJs</span> e usando o <span>Stiled Components</span> para estilizaçao. Usei a <a href="https://rickandmortyapi.com/">Api Rick And Morty</a> para receber todos os dados. </p>
            <div>
              <Button onClick={() => abrirUrl(CodRickAndMorty)} >Codigo</Button>
              <Button onClick={() => abrirUrl(UrlRickAndMorty)} >Site</Button>

            </div>
          </div>

        </Projeto>

        <Projeto>

          <div className="bloco">

            {width > 1200 ? null : <h3>Site Climatico</h3>}
            <a href={UrlClimatico} target="_blank" >
              <ImgStyle wid='90%' bordRad='15px' > <img src={ClimaTempoImg} alt="" /> </ImgStyle> </a>
          </div>

          <div className="bloco">
            {width > 1200 ? <h3>Site Climatico</h3> : null}
            <p>Um site mais simples, que mostra informaçoes de <span>clima e tempo </span> da sua cidade aovivo. O site foi criado com uma api free do site <span>OpenWeather</span>, Usei <span>JavaScript</span> para chamar a API, faço uma desestruturaçao e pego so os dados nescessario e mostro na tela com <span>HTML e CSS.</span> </p>

            <div>
              <Button onClick={() => abrirUrl(CodClimatico)} >Codigo</Button>
              <Button onClick={() => abrirUrl(UrlClimatico)} >Site</Button>

            </div>
          </div>

        </Projeto>
        <Projeto>
          <div className="bloco">

            {width > 1200 ? null : <h3>Site Sobre Android</h3>}
            <a href={UrlAndroid} target="_blank" >
              <ImgStyle wid='90%' bordRad='15px' > <img src={SiteAndroidImg} alt="" /> </ImgStyle> </a>
          </div>

          <div className="bloco">
            {width > 1200 ? <h3>Site Sobre Android</h3> : null}
            <p>
              Esse eh um site que fala um pouco do Sitema <span>Android</span>, Criado totalmete com <span>HTML e CSS</span>, O objetivo principal foi criar um site totalmete <span>Responsivo</span>, com responsividade ate nas <span>Imagens</span>, e fique bem fatisfeito com o resultado.
            </p>

            <div>
              <Button onClick={() => abrirUrl(CodAndroid)} >Codigo</Button>
              <Button onClick={() => abrirUrl(UrlAndroid)} >Site</Button>

            </div>
          </div>
        </Projeto>

        <Projeto>
          <div className="bloco">
            {width > 1200 ? null : <h3>Calculadora</h3>}

            <a href={UrlCalculadora} target="_blank" >
              <ImgStyle wid='90%' bordRad='15px' > <img src={Calculadora} alt="" /> </ImgStyle> </a>
          </div>

          <div className="bloco">
            {width > 1200 ? <h3>Calculadora</h3> : null}
            <p>
              Uma calculadora simples e funcional, Criei ela com <span>HTML e CSS</span>, e usei o <span>JavaScript</span> para adicionar funçoes, parecia bem simples mas foi bem desafiador pois foi criada <span>totalmente</span> do 0.
            </p>

            <div>
              <Button onClick={() => abrirUrl(CodCalculadora)} >Codigo</Button>
              <Button onClick={() => abrirUrl(UrlCalculadora)} >Site</Button>

            </div>
          </div>
        </Projeto>
      </ProjetcsStyle>
    </>
  )
}