import React from 'react'

const Product = () => {
  return (
    <section>
        <div className='container text-white py-5'>
            <div className='vstack justify-content-center product rounded-5'>
                <div className='text-center pt-5'>
                      <h1 className=''>solakgpt</h1>
                      <p>lorem </p>
                </div>
                <div className='p-5 '>
                    <div className='row justify-content-between'>
                        <div className='col-12 col-md-6'>
                            <h1>solakgpt</h1>
                            <p>An invisible encryption proxy which automatically intercepts and encrypts selected sensitive fields before they touch your server. No additional configuration required.Learn more</p>
                            <button className='btn btn-primary px-3'>Learn</button>
                        </div>
                        <div className='col-12 col-md-6 mt-3 mt-md-0'>
                             <img src={require('./../../asset/images/cis.png')} className='img-fluid' alt=''/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product