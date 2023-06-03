import React from 'react'

const Api = () => {
  return (
    <section>
         <div className="container">
            <div className="row api p-5 align-items-center justify-content-between">
                 <div className="col-12 col-md-5 text-white">
                 <span className='border border-2 rounded-4 px-4 py-1 bg-light'> <a href='#' className='link text-dark animate__animated animate__shakeX'>Cages are now better</a></span>
                 <h1 className='mt-4 fs-1'>Your existing data flows, but encrypted.</h1>
                 <p>Evervault is a flexible, plug-and-play encryption and data security API that doesn’t interfere with the ways you already use your data.</p>
                 </div>
                 <div className="col-12 col-md-5">
                      <img src={require('./../../asset/images/gif3.gif')} className='img-fluid' alt=''/>
                 </div>
            </div>
         </div>
    </section>
  )
}

export default Api