import { Link } from 'react-router-dom'
import LogoImg from '../../images/logo.png'
import { LogoStyled } from './ImgStyles'


export const Logo = () => (
  <LogoStyled>

    <Link to='/'> <img src={LogoImg} alt="" /> </Link>
  </LogoStyled>
)