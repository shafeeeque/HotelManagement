import React from 'react'
import Allitem from '../../Destinations/Allitem'
// import "../../Destinations/Allitem"

const DestinationHome = () => {
  return (
    <>
        <section className='popular top'>
            <div className='full_container'>
                <div className='heading'>
                    <h1>Most Popular Destination</h1>
                    <div className='line'></div>
                </div>
                <div className='content'>
                    <Allitem/>

                </div>

            </div>

        </section>
    </>
  )
}

export default DestinationHome