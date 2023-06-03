import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [showLogo, setShowLogo] = useState(true);
    
    useEffect(()=>{
        const handleScroll=()=>{
            const scroll =window.pageYOffset
            if(scroll > 0){
                setShowLogo(false)
            }else{
                setShowLogo(true)
            }
        }
        
        window.addEventListener('scroll', handleScroll)

        return ()=>{
                window.removeEventListener('scroll', handleScroll)
        }
    })

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
            path:'/'
        },
        {
            id:4,
            page:'Docs',
            path:'/'
        },
        {
            id:5,
            page:'Resources',
            path:'/'
        }
    ]
  return (
    <div style={{backgroundColor:'blue'}}>
        <nav class="navbar navbar-expand-md bg-body-tertiary fixed-top mobileRound">
            <div class="container  ">
                {showLogo ? (<a class="navbar-brand" href="#">SolakGPT</a>):(<a class="navbar-brand d-block d-md-none" href="#">SolakGPT</a>)}
                
                <div className='d-block d-md-none'>
                    <button class="btn btn-dark">Get Started</button>
                    <button class="btn btn-light">Login</button>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> 
                <div class="collapse navbar-collapse" id="navbarNavDropdown"> 
                     <ul class="navbar-nav mx-auto border border-3 text-center rounded-5 p-2 bg-dark">
                    {
                        NavList.map((item, index) =>(
                            <li key={index} className='nav-item text-white px-3 py-3 py-md-0 hover'><Link className='link navItem' to={item.path}>{item.page}</Link></li>
                        ))
                    }
                </ul>
                </div>
                <div className='d-none d-md-block'>
                    <button class="btn btn-dark p-2">Get Started</button>
                    <button class="btn btn-light bg-light p-2">Login</button>
                </div>
            </div>
</nav>
    </div>
  )
}

export default Navbar