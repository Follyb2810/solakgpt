import React from 'react'
import { Link } from 'react-router-dom'
import { footerList } from './DataFooter'

const Footer = () => {
  return (
    <footer>
       <div className="container text-white py-5">
          <div className="row">
              <div className="col-12 col-md-4">
                 <h1 > <Link to='/'>SolakGpt</Link></h1>
              </div>
              <div className="col-12 col-md-8">
                    <div className="row">
                        {
                          footerList.map((footer, index) =>(
                            <div className="col-6 col-md-3" key={index}>
                                <h1>{footer.h1}</h1>
                                <ul>
                                    {
                                      footer.li.map((li, index)=>(
                                        <li key={index}>
                                             {li}
                                        </li>
                                      ))
                                    }
                                </ul>
                            </div>
                          ))
                        }
        
                    </div>
              </div>
          </div>
       </div>
    </footer>
  )
}

export default Footer