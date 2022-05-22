import React from 'react'
import { BsFillPeopleFill } from "react-icons/bs";
const AboutSubContent = () => {
  return (
    <>
        <div className="container mt-5 pt-5 pb-5" style={{textAlign:"center"}}>
            <div className="row" >
                <div className='col-12 col-md-6 col-lg-6 mb-4' >
                    <div className='aboutCard1 py-5 px-5'>
                    <h1 style={{fontWeight:"bolder",marginInline:"15px"}}>
                        7000+ Students Currently Enrolled 100% Placement Rate
                    </h1>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6 mb-4' style={{display:"flex",justifyContent:"center"}}>
                    <div className='aboutCard2 pt-5 px-5' style={{background:"rgb(111, 205, 158)"}}>
                        <BsFillPeopleFill style={{width:"30px",height:"35px"}} className="mb-2"/>
                    <h1 style={{fontWeight:"600",marginInline:"10px",fontSize:"34px"}}>
                    41 LPA Highest Salary 
                    </h1>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6 mb-4' style={{display:"flex",justifyContent:"center"}}>
                    <div className='aboutCard2 pt-5 px-5' style={{background:"rgb(110, 113, 204)"}}>
                        <BsFillPeopleFill style={{width:"30px",height:"35px"}} className="mb-2"/>
                    <h1 style={{fontWeight:"600",marginInline:"10px",fontSize:"34px"}}>
                    9 LPA Average Salary 
                    </h1>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6 mb-4' style={{display:"flex",justifyContent:"center"}}>
                    <div className='aboutCard2 pt-5 px-5'>
                        <BsFillPeopleFill style={{width:"30px",height:"35px"}} className="mb-2"/>
                    <h1 style={{fontWeight:"600",marginInline:"10px",fontSize:"34px"}}>
                    700+ Partner Companies
                    </h1>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutSubContent