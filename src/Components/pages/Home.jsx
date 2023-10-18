import React from 'react'
import Hero from '../HomeSection/Hero'
import Navbar from '../../commen/Navbar/Navbar'
import HomeAbout from '../HomeSection/HomeAbout'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeAbout/> 
    </>
  )
}


export default Home