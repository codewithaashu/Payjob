import React from 'react'
import { FaRupeeSign } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import db from './CoursesDB';
import { NavLink } from 'react-router-dom'
const CoursesCard = () => {
  return (
    <>
    {
      db.map((currElem)=>{
        const {id,imgsrc,subHeading,salary,eligibility}= currElem;
        return(
        <div className="col-12 col-md-4 col-lg-4 m-auto" key={id}>
    <div className="card shadow p-0 ms-2 mb-5 bg-body rounded cardClass">
  <img src={imgsrc} className="card-img-top" alt="Human" style={{height:"280px"}}/>
  <div className="card-body">
    <h5 className="card-title pt-2 pb-1" style={{color:"#737c81",fontSize:"15px",fontWeight:"normal",lineHeight:"24px"}}>{subHeading}</h5>
    <hr />  
    <div className="row m-auto" style={{fontSize:"12px",fontWeight:600}}>
      <div className="col-6 col-md-6 col-lg-6" style={{borderRight:"1px solid black"}}>
      <FaRupeeSign className='iconDesign'/>
      <span className='mx-2 my-0'>Salary <span className='ms-3'>Commitment: <br /></span> <span className="mx-3" style={{color:"rgb(41, 180, 117)"}}>{`₹ ${salary}`} </span></span>
      </div>
      <div className="col-6 col-md-6 col-lg-6">
        <FaBookReader className='iconDesign' style={{color:"rgb(248, 161, 32)"}}/><span className='mx-2'>Eligibility: </span> <br /> <span className='mx-3' style={{color:"rgb(248, 161, 32)"}}>{eligibility}</span>
      </div>
    </div>
    <button className="cardBtn mt-4 px-3"  style={{height:"44px",border:"none",alignItems:"center",fontWeight:"600",fontSize:"15px"}} >
    <NavLink to = "/contactus" style={{outline:"none",color:"white",textDecoration:"none"}}>
      Know More
      </NavLink>
      </button>
  </div>
</div>
</div>
        )
})
}
</>
)
}

export default CoursesCard