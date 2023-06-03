import React from 'react'

const Loading = () => {
  return (
    <section className='bg-bg-primary-subtlery' style={{width:'100%',height:'100%',padding:'150px 0 50px'}}>
        <div className="container">
              <div className='row  align-items-center'>
                  <div className='col-12 col-md-3'>
                  <div class="spinner-border text-primary" role="status" style={{width:'100px',height:'100px'}}>
                        <span class="visually-hidden">Loading...</span>
                        </div>
                  </div>
                  <div className='col-12 col-md-8'>
                  <img src={require('./../asset/images/logorm.png')} alt="loading" className="img-fluid"/>
                  </div>
              </div>
            {/* <div className="row align-items-center justify-content-center " style={{width:'100%',height:'100%'}}>
            <div class="col-12 justify-content-center align-items-center" style={{width:'100%',height:'100%'}}>
            <div class=" spinner-border text-primary mx-auto" role="status" style={{width:'100px',height:'100px'}}>
            <span class="visually-hidden">Loading...</span>
            </div>
                <img src={require('./../asset/images/logorm.png')} alt="loading" className="img-fluid"/>
            </div>

          
           
            </div> */}
        </div>

    </section>
  )
}

export default Loading