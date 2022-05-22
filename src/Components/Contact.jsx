import React from 'react'
import Form from './Form';
import pic from './software-engineer.png';
const ContactUs = () => {
  return (
    <>
<div className="container aboutDiv">
                <h1 className='pt-4'>
                </h1>
                <div className="row mx-3 mt-4 pb-3" style={{display:"flex",justifyContent:"center", alignItems:"center",borderRadius:"1.25rem",boxShadow:"0 .5rem 1rem rgba(0,0,0,.15) !important"}}>

                    <div className='col-12 col-md-6 col-lg-6'>
                        <h1 className='mb-3' style={{color:"white",textAlign:"center",fontWeight:"600",fontSize:"38px",lineHeight:"54px",fontStyle:"normal"}} >
                            Let's Start a Conversation 
                        </h1>
                        <div style={{display:"flex",justifyContent:"center"}}>
                        <img src={pic} alt="Human" style={{width:"110px"}} />
                        </div>
                        <p className='mt-4' style={{fontStyle:"normal",fontWeight:"500",lineHeight:"30px",width:"70%",marginInline:"54px",textAlign:"center"}}>
                            If you have any question or just want to get in touch,use the form below. We look forward to hearing from you!
                        </p>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <Form/>
                    </div>
            </div>
                    <h1 className='pb-5'>
                    </h1>
            </div>
    </>
  )
}

export default ContactUs