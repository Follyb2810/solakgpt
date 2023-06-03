import React from 'react'
import GIF from './../../asset/images/gif4.gif'

const Hero = () => {
  return (
    <section className='px-0 p-md-4 '>
    <section className='hero rounded-bottom-5'>
        <div className='container'>
              <div className='row align-items-center' style={{padding:'150px 0 50px',overflow:'hidden'}}>
                  <div className='col-12 col-md-6 p-5' style={{overflow:'hidden'}}>
                    <span className='border border-2 rounded-4 px-4 py-1'> <a href='#' className='link animate__animated animate__shakeX'>Cages are now better</a></span>
                    <h1 className='mt-5'>Eliminate The Risk Of Data Breaches</h1>
                    {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,</p>
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