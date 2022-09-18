import React from 'react'
import Navbar from './nav/Navbar'
import Navfloat from './Navfloat/Navfloat'
import Heroimg from './hero/Heroimg'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg />
      <Navfloat />
    </div>
  )
}

export default Home
