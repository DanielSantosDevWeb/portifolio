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

      <li> <a href="#" target="_blank"> <FaGithub /> </a></li>
      <li> <a href="#" target="_blank"> <FaLinkedin /> </a></li>
      <li> <a href="#" target="_blank"> <FaWhatsapp /> </a></li>
    </ul>
  )
}