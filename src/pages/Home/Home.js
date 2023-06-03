import React from 'react'
// import Home from './Data'
import {Homes} from './DataContent'
const Home = () => {

  return (
    <section>
      <section className='product'>
        <div className='container'>
        <div className='row text-white align-items-center'>
           {
            Homes.map((home,index)=>(
              <div className='col-12 col-md-6 py-5 ' key={index}>
                  <h2>{home.h1}</h2>
                  <p>{home.p}</p>
                  <img src={home.img} alt={home.img} className='img-fluid'/>
              </div>
            ))
           }
        </div>
        </div>
           
        </section>
      </section>
  )
}

export default Home