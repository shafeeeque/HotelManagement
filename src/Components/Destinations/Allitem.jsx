import React, { useState } from 'react'
import Dcard from './Dcard'
import Sdata from './Sdata'

const Allitem = () => {
    const [items, setItems] = useState(Sdata);
  return (
    <>
        <section className='gallery desi mtop'>
            <div className='containerr'>
                <div className='content grid'>
                    {items.map((item)=>{
                        return <Dcard key = {item.id} item={item}/>
                    })}

                </div>

            </div>

        </section>
    </>
  )
}

export default Allitem