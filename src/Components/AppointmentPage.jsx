import React, { useState,useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
function AppointmentPage({show,hide}) {
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const message = useRef("");
  const select = useRef("")
  const dates = useRef("")

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

  function selectValidation(){
    if(select.current.value === ""){
      toast.warn("Please select a service");
      return false
    }else{
      return true;
    }
  }

  function dateValidation(){
    if(dates.current.value === ""){
      toast.warn("Please select a date");
    }else{
      return true;
    }
  }

  const formSubmit = (e)=>{
    e.preventDefault();
     if(nameValidation()){
      if(emailValidation()){
        if(phoneValidation()){
          if(selectValidation()){
            if(dateValidation()){
              axios.post("https://doctor-b62c.onrender.com/api/appointment",{
                name: name.current.value,
                email: email.current.value,
                phone: phone.current.value,
                select:select.current.value,
                dates: dates.current.value,
                message:message.current.value
              }).then((response)=>{
                console.log(response.data)
              }).catch((err)=>{
                console.log(err)
              })
            toast.success("Form submitted successfully");
            name.current.value = "";
            email.current.value = "";
            phone.current.value = "";
            message.current.value = "";
            select.current.value = "";
            dates.current.value = "";
            }
          }
        }
      }
     }
    
  }
  return (
    <div className="appointment-form-pages" style={{display:show}}>
              <div className="cutap-form" onClick={()=>{hide("none")}}>
          <p>X</p>
        </div> 
        <hr />
      <form action="" onSubmit={formSubmit}> 
        <label htmlFor="">What your full name?</label> <br />
        <input type="text" placeholder="Enter your Name" ref={name}/> <br />
        <label htmlFor="">Email</label> <br />
        <input type="email" placeholder="Enter your Email" ref={email}/> <br />
        <label htmlFor="">Phone Number</label> <br />
        <input type="number" placeholder="Enter your Phone Number" ref={phone}/> <br />
        <label htmlFor="">Appointment Type</label> <br />
        <select name="" id="" ref={select}>
          <option value=""></option>
          <option value="General Checkup">General Checkup</option>
          <option value="Specialist Consuitation">Specialist Consuitation</option>
          <option value="Follow-up Visit">Follow-up Visit</option>
        </select>
        <br />
        <label htmlFor="">Preferred Date</label> <br />
        <input type="date" ref={dates}/> <br />
        <label htmlFor="">Details</label> <br />
        <textarea placeholder="Please provide any additional details here..." ref={message}></textarea> <br />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default AppointmentPage;
