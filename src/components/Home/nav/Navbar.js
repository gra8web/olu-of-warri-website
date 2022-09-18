import {React, useState }from 'react'
import'./Navbar.css'
import Logo from "../../../assets/logoimg.png"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleClick =() => setClick(!click);
  return (
    <div >
        <div className='header'>
         <a href='index.html'><img className='logoimg' src={Logo} alt="" /></a>
          <div>
            <ul className={click ? "nav-menu.active" : "nav-menu"}>
               <li><a href='index.html'>History</a></li>
               <li><a href='index.html'>The Ginuwa Ruling House</a></li>
               <li><a href='index.html'>Warri Traditional Council</a></li>
               <li><a href='index.html'>Royal Court Notices</a></li>
            </ul>
          </div>
          <div className='hamburger' onClick={handleClick}>
                {click ? (
                 <FaBars  size={20} style={{color:"#ffff"}}/> )
                 :(<FaTimes size={20} style={{color:'#ffff'}} />)}
           </div>
        </div>
    </div>
  )
}

export default Navbar