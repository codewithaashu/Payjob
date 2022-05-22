import React from 'react'
import AboutContent from './AboutContent'
import AboutSubContent from './AboutSubContent'
import { Companies } from './Companies'
const AboutUs = () => {
    return (
        <>
    <div className="container pt-5" style={{textAlign:"center"}}>
        <p style={{color:": rgb(89, 89, 89)",fontSize:"24px",marginBottom:"0px",fontWeight:"500",lineHeight:"36px"}}>
        Have a Dream Company In Mind?
        </p>
        <h1 style={{color:"rgb(1, 37, 85)",fontWeight:"bolder",fontSize:"36px",lineHeight:"54px"}}>
            Meet Some of Our 700+ Hiring Partners
        </h1>
        <Companies/>
    </div>
        <AboutContent/>
        <AboutSubContent/>
    </>
  )
}

export default AboutUs