import React from 'react'
import GIF from './../../asset/images/gif4.gif'

const Hero = () => {
  return (
    <section className='px-0 p-md-4 '>
    <section className='hero rounded-bottom-5'>
        <div className='container'>
              <div className='row align-items-center' style={{padding:'150px 0 50px',overflow:'hidden'}}>
                  <div className='col-12 col-md-6 p-2 p-md-5' style={{overflow:'hidden'}}>
                    <span className='border border-2 rounded-4 px-4 py-1'> <a href='#' className='link '>Cages are now better</a></span>
                    <h1 className='mt-5'>Hi,I'm <span id='solak'>SolakGPT</span></h1>
                    {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
                    <p>Discover SolakGPT Ecosystem:<br/>
                    Where cutting-edge AI meets Defi.out game-changing AI browser and SolakGPT Defi platform redefined the digital web 3.0 landscape 
                    </p>
                    <button className='btn btn-light text-black'>Get Started</button>
                    <button className='btn  text-white'>Get Intouch</button>

                  </div>
                  <div className='col-12 col-md-6 mt-3 mt-md-0'>
                      <img src={GIF} alt='GIF' className='img-fluid'/>

                  </div>
              </div>
        </div>
    </section>
    </section>
  )
}

export default Hero