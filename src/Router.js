import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Loading from './Shared/Loading'
// import Home from './pages/Home/Home'

const Home =lazy(() =>import('./pages/Home/index'))
const About =lazy(() =>import('./pages/About/index'))
// const Blogpost = lazy(() => import('./pages/Blogpost'));

// 

const Router = () => {
  return (
       <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
              </Route>
          </Routes>

       </Suspense>
  )
}

export default Router