import React from 'react'
import img from './../../asset/images/cis.png'

const Client = () => {
    const Clients=[
         {
           id:1,
           img: require('./../../asset/images/cis.png')    
        },
         {
           id:2,
           img: require('./../../asset/images/cis.png')    
        },
         {
           id:3,
           img: require('./../../asset/images/cis.png')    
        },
         {
           id:4,
           img: require('./../../asset/images/cis.png')    
        },
         {
           id:5,
           img: require('./../../asset/images/cis.png')    
        },
         {
           id:6,
           img: require('./../../asset/images/cis.png')    
        },
         {
           id:7,
           img: require('./../../asset/images/cis.png')    
        },
         {
           id:8,
           img: require('./../../asset/images/cis.png')    
        },
         {
           id:9,
           img: require('./../../asset/images/cis.png')    
        },
         {
           id:10,
           img: require('./../../asset/images/cis.png')    
        },
         {
           id:11,
           img: require('./../../asset/images/cis.png')    
        },
         {
           id:12,
           img: require('./../../asset/images/cis.png')    
        },
    ]

  return (
    <section className='container'>
          <div className='row'>
           {
               Clients.map((image,index)=>(
                <div className='col-4 col-md-3 p-4' key={index}>
                     <img src={image.img} alt={image.img} style={{width:'100px'}}/>
                
                </div>
               ))
           }
           <p className='text-white'>Note that this code assumes you are using a module bundler like Webpack or Babel with appropriate plugins to handle imports. The require function is commonly used in CommonJS modules, but in modern React projects, you typically use ES modules and the </p>
          </div>
    </section>
  )
}

export default Client