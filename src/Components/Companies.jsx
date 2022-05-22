import React from 'react'
import db from './CompaniesDB';
export const Companies = () => {
  return (
    <div className="container">
        <div className="row py-5 ">
        {
         db.map((curElem)=>{
                return(
                    <div className='col-4 col-md-3 col-md-3 px-4' key ={curElem.id}>
                    <img src={curElem.src} alt="" className='companyLogo' style={{width:"230px"}} />
                </div>
                )
            })
        }
        <span style={{fontWeight:"400",lineHeight:"1.5",fontSize:"16px",color:"#737c81",textAlign:'center'}}>
          and many more...
        </span>
        </div>
    </div>
  )
}
