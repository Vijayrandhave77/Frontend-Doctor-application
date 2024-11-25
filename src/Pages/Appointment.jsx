import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppointmentPage from "../Components/AppointmentPage";
function Appointment() {
    const appointemnt = [
        {
            name:"Organic",
            price:"$30",
            time:"-15 Min"
        },
        {
            name:"Natural",
            price:"$50",
            time:"-35 Min"
        },
        {
            name:"Bioactive",
            price:"$55",
            time:"-30 Min"
        },
        {
            name:"Cosmatic",
            price:"$80",
            time:"-15 Min"
        },
        {
            name:"Drenched Skin",
            price:"",
            time:""
        },
        {
            name:"Ageless Beauty",
            price:"",
            time:""
        },
    ]

    const [show,setShow] = useState("none")



  return (
    <div className="appointment-page">
      <div className="contact-heading">
        <h1>Appointment</h1>
      </div>
      <div className="appointment-title">
        <h1>Medicalist Appointment</h1>
        <p>16 North Street, EX4 3QS,Exeter,England</p>
      </div>

      <div className="appointment-list">
        {
            appointemnt.map((data=>(
                <div className="appointment-item">
                <h2>{data.name}</h2>
                <div className="apbuttons">
                  <p>
                    {data.price}<span>{data.time}</span>
                  </p> 
                  <button onClick={()=>{
                     setShow("inline-block")
                  }}>APPOINTMENT</button>
                </div>
              </div>
            )))
        }
      </div>
      <AppointmentPage show={show} hide={setShow}></AppointmentPage>
      <ToastContainer />
    </div>
  );
}

export default Appointment;
