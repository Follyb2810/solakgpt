import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const NavList =[
        {
            id:1,
            page:'Home',
            path:'/'
        },
        {
            id:2,
            page:'About',
            path:'/about'
        },
        {
            id:3,
            page:'Contact',
            path:'/contact'
        },
        {
            id:1,
            page:'Docs',
            path:'/docs'
        },
        {
            id:1,
            page:'Resources',
            path:'/eesources'
        }
    ]

  return (
    
      <> 
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">    
                     <ul class="navbar-nav mx-auto border border-3 rounded-5 p-2 bg-dark">
                    {
                        NavList.map((item, index) =>(
                            <li key={index} className='nav-item text-white px-3 py-3 py-md-0'><Link className='link navItem' to={item.path}>{item.page}</Link></li>
                        ))
                    }
                </ul>
                </div>
        </>
  )
}

export default Nav