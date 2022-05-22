import React from 'react'
import AboutCard from './AboutCard';
export const AboutContent = () => {
    return (
        <>

            <div style={{ background: "#16252d", color: "white" }}>
                <div className='pt-4'>
                    <h1 className='pt-5 p8' style={{ textAlign: "center", fontWeight: "600", fontStyle: "normal", fontSize: "34px", lineHeight: "51px" }}>
                        Get 100% support from our <span style={{ color: "#29b475" }}> dedicated placement
                        </span>
                        <br /> team till you get placed
                    </h1>
                </div>
                <div className="container mt-5 pb-4 p8">
                    <div className="row" style={{display:"flex",justifyContent:"center"}} >
                        <AboutCard />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutContent;
