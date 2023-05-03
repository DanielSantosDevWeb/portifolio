import React from 'react'
import { SobreStyle } from './SobreStyled'
import ImgGit from '../../images/git.png'
import ImgCss from '../../images/logo-css.png'
import ImgHtml from '../../images/logo-html.png'
import ImgJavaScript from '../../images/logo-javascript.png'
import ImgNode from '../../images/logo-node.png'
import ImgReact from '../../images/logo-react.png'
import { HabilidadeStyled } from '../layouts/HabilidadeStyled'
import { ImgStyle } from '../components/ImgStyles'
import SobreMin from '../components/SobreMin'
import { Habilidades } from './HabilidadesStyled'

function Sobre() {
  return (
    <SobreStyle>
      <div className='sobreMin' >
        <SobreMin />
      </div>


      <section>
        <h2>Habilidades</h2>
        <Habilidades >
          <HabilidadeStyled>
            <ImgStyle wid='50%' > <img src={ImgHtml} alt="" /> </ImgStyle>
            <p> Aprendizagem na linguagem <span>Html</span>, como a parte semantica do html e responsiva, criaçoes de formularios e tabelas. </p>
          </HabilidadeStyled>
          <HabilidadeStyled>
            <ImgStyle wid='50%' > <img src={ImgCss} alt="" /> </ImgStyle>
            <p> Avançado na linguagem <span>Css</span>, com criaçoes de sites responsivos para mobile a tv, animaçoes, displays entres outras.  </p>
          </HabilidadeStyled>
          <HabilidadeStyled>
            <ImgStyle wid='50%' > <img src={ImgJavaScript} alt="" /> </ImgStyle>
            <p>Linguam que mais me aprofundei foi o <span>JavaScript</span>, manipulaçao de objetos, async/await, Promises, Manipulaçao de API com fetch, desisntruturaçao entre outras funcionalidades. </p>
          </HabilidadeStyled>
          <HabilidadeStyled>
            <ImgStyle wid='50%' anim='girar'  > <img src={ImgReact} alt="" /> </ImgStyle>
            <p> Familiarizado com a linguagem <span>ReactJs</span>, Sei sobre Hooks, rotas dinamincas com o <span>React Router Dom</span>, useState, useEffect, useContext, manipulaçao de Props entre outros. </p>
          </HabilidadeStyled>
          <HabilidadeStyled>
            <ImgStyle wid='50%' > <img src={ImgNode} alt="" /> </ImgStyle>
            <p>Linguem que estou começando a estudar, Ja sei algumas coisas sobre HTTP, GET, POST, DELETE, PATCH, acho uma linguam muito versatil e dinamica. </p>
          </HabilidadeStyled>
          <HabilidadeStyled>
            <ImgStyle wid='50%' > <img src={ImgGit} alt="" /> </ImgStyle>
            <p>Sei o basico e Git, clonar repositorios com o git clone, publicar projeto ou app com o git push, git commit para salvar entre outras funçoes.</p>
          </HabilidadeStyled>
        </Habilidades>
      </section>
    </SobreStyle >
  )
}

export default Sobre