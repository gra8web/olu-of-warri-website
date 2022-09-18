import React from 'react'
import'./heroimg.css'
import homeimage from "../../../assets/homeimage.png"

const Heroimg = () => {
  return (
    <div className='hero'>
     <div className='heroimg'>
     <img className='kingpic' src={homeimage} alt="heroimage"></img>
     </div> 
      <div className='hero-content'>
      <h1>Ògíamẹ̀ Atúwàtse III - The Olú of Warri</h1>
      </div>
    </div>
  )
}

export default Heroimg


