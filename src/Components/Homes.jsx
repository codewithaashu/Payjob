import React from 'react'
import { NavLink } from 'react-router-dom'
import hero from "./hero0.png";
const Home = () => {
  return (
    <>
    <div className='homeBanner' >
    Next Batch starts in <span style={{color:"#f90"}}>20 days</span>. Register Now!
    </div>
    <div className='container homeWrapper'>
          <div className='row'>
            <div className='col-12 col-md-8 col-lg-8 px-5' style={{textAlign:"center"}}>
              <h1 className='homeHeading pt-5 mt-3' >
              Build your tech career 
              </h1>
              <h2 className='homeHeading' style={{marginTop:"-0.7rem"}} >Pay us after you get a job</h2>
              <div className='mt-3 homeSubHeading' style={{lineHeight:"32px"}}>
              <span>
              Launch your dream career at
              </span>
              <span style={{color:"#29b475"}}> 0 upfront fees.</span>
              </div>
            <button className='homeBtn my-4 p-3' >
             <NavLink to = "/contactus" style={{color:"white",textDecoration:"none"}}>
             Apply Now for Free
               </NavLink>
            </button>
            </div>
            <div className='col-12 col-md-4 col-lg-4' style={{display:"flex",justifyContent:"center"}}>
                <img src={hero} alt="Human" style={{width:"80vw",height:"379px"}} className="mt-1" />
            </div>
           </div>
        </div>
    </>
  )
}

export default Home