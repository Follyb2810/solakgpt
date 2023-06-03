import React from 'react'

const Banner = () => {
  const bannerData=[
    {
      p:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
      Note that this code assumes you are using a module bundler like Webpack or Babel with appropriate plugins to handle imports. The require function is commonly used in CommonJS modules, but in modern React projects, you typically use ES modules and the`
    },
    {
      p:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
      Note that this code assumes you are using a module bundler like Webpack or Babel with appropriate plugins to handle imports. The require function is commonly used in CommonJS modules, but in modern React projects, you typically use ES modules and the`
    },
    
  ]
  return (
    <section className='text-white'>
        <div className='container'>
                <div className='row justify-content-between'>
                     {
                      bannerData.map((banner, index)=>(
                        <div className='col-12 col-md-5 rounded-5 p-4 border' key={index}>
                          <p>{banner.p}</p>
                        </div>
                      ))
                     }
                </div>
        </div>
       
    </section>
  )
}

export default Banner