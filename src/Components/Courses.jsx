import React from 'react'
import CoursesCard from './CoursesCard';
const Courses = () => {
  return (
    <>
    <div style={{background:"rgb(233, 247, 241)"}}>
        <div className='pt-5'>
            <h1 style={{textAlign:"center",fontSize:"45px"}}>
              <span style={{color:"rgba(0, 0, 0, 0.87)",fontWeight:"800",lineHeight:"51px"}}>Our</span> <span style={{color:"#29b475" ,fontWeight:"800",lineHeight:"51px"}}>Courses</span>
            </h1>
        </div>
        <div className="container mt-5">
            <div className="row">
                    <CoursesCard />
                </div>
            </div>
        </div>
    </>
  )
}

export default Courses