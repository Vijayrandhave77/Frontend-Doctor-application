import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ContactUs() {

  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const message = useRef("");

  function nameValidation(){
    if(name.current.value.length < 3){
      toast.warn("Name must be at least 3 characters long");
      return false;
    }else{
      return true;
    }
  }

  function emailValidation(){
    const emailRegex = /[A-Z a-z 0-9]+@[a-z]/
    
    if(email.current.value.length >1 && email.current.value.match(emailRegex)){
      return true;
    }
    else{
      toast.warn("Invalid email");
      return false;
    }
  }

  function phoneValidation (){
    const phoneRegex = /[0-9]/
    if(phone.current.value.match(phoneRegex)){
      return true;
    }else{
      toast.warn("Invalid phone number");
    }
  }


  const formSubmit = (e)=>{
    e.preventDefault();
     if(nameValidation()){
      if(emailValidation()){
        if(phoneValidation()){
           
            axios.post("https://doctor-b62c.onrender.com/api/contact",{
              name:name.current.value,
              email:email.current.value,
              phone:phone.current.value,
              message:message.current.value 
            }).then((response)=>{
              console.log(response.data);
            }).catch((error)=>{
              console.log(error);
            })
          toast.success("Form submitted successfully");
          name.current.value = "";
          email.current.value = "";
          phone.current.value = "";
          message.current.value = "";
        }
      }
     }
    
  }

  return (
    <div className='contact-page'>
      <div className="contact-heading">
        <h1>Contact Us</h1>
      </div>
      <div className="form-tittle">
    <p>Have <span>Any Question</span> So Please Contact US</p>
      </div>
      <div className="contact-form">
        <form action="" onSubmit={formSubmit}>
            <input type="text"  placeholder='Complete Name'  ref={name}/> <br />
            <input type="text" placeholder='Email Address' ref={email}/> <br />
            <input type="text" placeholder='Phone No' ref={phone}/> <br />
            <textarea name="" id="" placeholder='Message' ref={message}></textarea> <br /> <br />
            <button type='submit'>Appointment</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ContactUs
