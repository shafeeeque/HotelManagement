import React from 'react'
import Navbar from '../../commen/Navbar/Navbar'
import HeadTitle from '../../commen/HeadTitle/HeadTitle'
import Card from './Card'
import GalleryData from './GalleryData'
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
    <Navbar/>
    <HeadTitle/>
    <section className='gallery top'>
        <div className='containerr grid' >
            {
               GalleryData.map((value)=>{
                return <Card images = {value.img} title = {value.title}/>
               }) 
            }
        </div>

    </section>
    </>
  )
}

export default Gallery