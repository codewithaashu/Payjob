import React from 'react'
import { useState  } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
  const error = () =>toast.error('Please, Fill up the Form',{ theme: "colored" }, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

    const sucess =()=>toast.success('Message is sucessfully sent', { theme: "colored" }, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    const [userData,setUserData]=useState({
        name:'',
        email:'',
        phone:'',
        message:''
    })
    let name,value;
    const postUserData =(event)=>{
        name = event.target.name;
        value = event.target.value;
        setUserData({...userData,[name]:value})
    }
    const sumbitForm = async(e)=>{
        e.preventDefault();
        const {name,email,phone,message} = userData;
        if(name && email && phone && message){
           const res = await fetch("https://payjob-474f8-default-rtdb.firebaseio.com/payjob.json", {  
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            name,
            email,
            phone,
            message
    }),
});
    if(res){
      sucess();
      setUserData({
        name:'',
        email:'',
        phone:'',
        message:''
      })
    }
    else{
      error();
    }
  }
  else{
    error();
}
    }
  return (
    <>
    <form className='pt-5 mx-5' onSubmit={sumbitForm}>
  <div className="form-group mt-4">
    <label htmlFor="inputAddress" className='labelClass'>Full Name</label>
    <input type="text" name='name' className="form-control" placeholder="Enter your Full Name" value ={userData.name} onChange={postUserData}></input>
  </div>
  <div className="form-group mt-4">
  <label htmlFor="exampleInputEmail1" className='labelClass'>Email address</label>
    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={userData.email} onChange={postUserData}/>
  </div>
  <div className="form-group mt-4">
    <label htmlFor="inputAddress2" className='labelClass'>Phone Number</label>
    <input type="text" name='phone' className="form-control" placeholder="Enter your Phone Number" value={userData.phone} onChange={postUserData}/>
  </div>
  <div className="form-group mt-4">
    <label htmlFor="inputAddress" className='labelClass'>Message</label>
    <textarea type="text" name='message' className="form-control" placeholder="Enter your Message" style={{height:"200px"}} value={userData.message} onChange={postUserData}></textarea>
  </div>
  <div style={{display:"flex",justifyContent:"center"}}>
  <button className="btn btn-success cardBtn mt-4 mx-2" style={{height:"44px",border:"none",alignItems:"center",fontWeight:"600",fontSize:"15px",outline:"none"}}>Send Messages</button>
  </div>
</form>
<ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </>
  )
}

export default Form