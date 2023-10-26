import React from 'react'
import Hero from '../HomeSection/Hero'
import Navbar from '../../commen/Navbar/Navbar'
import HomeAbout from '../HomeSection/HomeAbout'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import MostPopular from '../../Components/HomeSection/Popular/MostPopular'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeAbout/>
      <MostPopular/> 
      <DestinationHome/>
    </>
  )
}


export default Home