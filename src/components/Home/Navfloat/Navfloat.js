import React from 'react'
import"./Navfloat.css"
import {AiOutlineHome} from "react-icons/ai"
import {SiExpressvpn} from "react-icons/si"
import {GiStoneThrone} from "react-icons/gi"
import {AiOutlineBell} from "react-icons/ai"
import {BsChatQuote} from "react-icons/bs"
import {MdAccountCircle} from "react-icons/md"


const Navfloat = () => {
  return (
    <div>
      <nav>
        <a href='#'><AiOutlineHome /><span>Home</span></a>
        <a href='#'><SiExpressvpn /><span>Press</span></a>
        <a href='#'><GiStoneThrone/><span>Event</span></a>
        <a href='#'><AiOutlineBell/><span>Notices</span></a>
        <a href='#'><BsChatQuote/><span>Speeches</span></a>
        <a href='#'><MdAccountCircle/><span>Accounts</span></a>
      </nav>
      <span className='nav-dropdown'>V</span>
    </div>
  )
}

export default Navfloat