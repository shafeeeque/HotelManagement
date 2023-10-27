import React from 'react'
import Wdata from './Wdata'
import Card from './Card'
import "./Work.css"


const Work = () => {
  return (
    <>
       <section className='popular works '>
        <div className='container'>
            <div className='heading'>
                <h1>How its Work</h1>
                <div className='line'></div>
            </div>
            <div className='content grid'>
                {Wdata.map((value , index ) =>{
                    return <Card key={index} cover={value.cover} title={value.title} desc={value.desc}/>
                })}
            </div>       
        </div>
       </section>
    </>
  )
}

export default Work