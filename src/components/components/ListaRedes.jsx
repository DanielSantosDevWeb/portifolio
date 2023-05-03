import { FaArrowDown, FaBars, FaArrowUp, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa"
import { IoMdClose } from 'react-icons/io'
import { useState, useEffect } from "react"

export default function Lista({ ModRedes, arrow, arrowShow }) {

  const [width, setWidth] = useState(window.innerWidth)

  addEventListener('resize', () => setWidth(window.innerWidth))

  return (
    <ul>

      {width < 770 ?
        arrowShow ?
          <li onClick={ModRedes} >
            {arrow ? <IoMdClose /> : <FaBars />}
          </li>
          : null
        : null}

      {/* {arrowShow ? <li onClick={ModRedes} > {arrow ? <IoMdClose /> : <FaBars />}</li> : null} */}

      <li> <a href="https://github.com/DanielSantosDevWeb" target="_blank"> <FaGithub /> </a></li>
      <li> <a href="https://www.linkedin.com/in/daniel-santos-4bba1b246" target="_blank"> <FaLinkedin /> </a></li>
      <li> <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5583994128864" target="_blank"> <FaWhatsapp /> </a></li>
    </ul>
  )
}