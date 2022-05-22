import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
    const [show,setShow] = useState(false);
    const scroll1=()=>{
      window.scrollTo(0,0)
    }
    const scroll2=()=>{
      window.scrollTo(0,0)
    }
    const scroll = () => {
      if (window.scrollY) {
          window.scroll(0,0)
      }
  }
    const scroll4=()=>{
      window.scrollTo(0,0)
    }
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light sticky-top navClass">
  <div className="container py-3">
    <NavLink className="navbar-brand p7" to="/" style={{color:"#29b475",fontWeight:"900",fontSize:"2rem",lineHeight:'1.5px'}}>PayJob</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{setShow(!show)}} >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show?'show':''}`} id="navbarSupportedContent" style={{color:"rgb(0, 0, 0)"}}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={()=>{setShow(!show)}} style={{display:"flex",justifyContent:'center'}}>
          <NavLink className="nav-link active" aria-current="page" to="/" onClick={scroll1} >Home</NavLink>
        </li>
        <li className="nav-item" onClick={()=>{setShow(!show)}} style={{display:"flex",justifyContent:'center'}}>
          <NavLink className="nav-link " to="/about" onClick={scroll2}>About Us</NavLink>
        </li>
        <li className="nav-item" onClick={()=>{setShow(!show)}} style={{display:"flex",justifyContent:'center'}}>
          <NavLink className="nav-link" to="/courses" onClick={scroll} >Course</NavLink>
        </li>
        <li className="nav-item" onClick={()=>{setShow(!show)}} style={{display:"flex",justifyContent:'center'}}>
          <NavLink className="nav-link" to="/contactus" onClick={window.scrollTo(0,0)}>Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar