import { FaArrowDown, FaArrowUp, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa"


export default function Lista({ ModRedes, arrow, arrowShow }) {

  return (
    <ul>
      {arrowShow ? <li onClick={ModRedes} > {arrow ? <FaArrowUp /> : <FaArrowDown />}</li> : null}
      <li> <a href="#" target="_blank"> <FaGithub /> </a></li>
      <li> <a href="#" target="_blank"> <FaLinkedin /> </a></li>
      <li> <a href="#" target="_blank"> <FaWhatsapp /> </a></li>
    </ul>
  )
}