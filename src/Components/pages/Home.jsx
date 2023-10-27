import React from 'react'
import Hero from '../HomeSection/Hero'
import Navbar from '../../commen/Navbar/Navbar'
import HomeAbout from '../HomeSection/HomeAbout'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import MostPopular from '../../Components/HomeSection/Popular/MostPopular'
import Work from '../HomeSection/Work/Work'
import Gallery from '../HomeSection/gallery/Gallery'


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeAbout/>
      <MostPopular/> 
      <DestinationHome/>
      <Work/>
      <Gallery/>
    </>
  )
}


export default Home