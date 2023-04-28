import { Link } from 'react-router-dom'
import LogoImg from '../../images/logo.png'
import { ImgStyle } from './ImgStyles'


export const Logo = () => (
  <ImgStyle wid='70px'>

    <Link to='/'> <img src={LogoImg} alt="" /> </Link>
  </ImgStyle>
)