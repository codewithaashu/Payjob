import React from 'react'
import db from './AboutContentDB';

const AboutCard = () => {
  return (
    <>
    {
        db.map((currElem)=>{
           const {id,src,heading,content} = currElem;
            return(
                <div className='col-12 col-md-4 col-lg-4 my-3 mx-3' key={id} style={{width:"406px",minHeight:"340px",background:"#243239",borderRadius:"4px"}}>
                <div className="card-body" style={{maxWidth:"100%"}} >
                    <div style={{display :"flex",justifyContent:"center",alignItems:"center"}} className="mt-4">
                    <img src={src} alt="Interview" style={{height:"45px"}}/>
                    </div>
                    <h6 className="card-subtitle mb-2 mt-3" style={{textAlign:"center",fontWeight:"500",fontSize:"20px",lineHeight:"30px",color:"#ffff",marginInline:"54px",margin:"30px 0 20px"}}>{heading}</h6>
                    <p className="card-text" style={{fontWeight:"400",fontSize:"15px",color:"#b9bec0",marginTop:"20px",marginInline:"30px",textAlign:"center"}}>{content}</p>
                </div>
        </div>
            )
        })
    }
    </>
  )
}

export default AboutCard