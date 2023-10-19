import React from 'react'
import Hero from '../HomeSection/Hero'
import Navbar from '../../commen/Navbar/Navbar'
import HomeAbout from '../HomeSection/HomeAbout'
import DestinationHome from '../HomeSection/Destina/DestinationHome'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeAbout/> 
      <DestinationHome/>
    </>
  )
}


export default Home