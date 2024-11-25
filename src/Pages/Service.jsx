import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

function Service() {
  return (
    <div className="service-page-components">
      <div className="contact-heading">
        <h1>Service Detail</h1>
      </div>
      <div className="service-component-box">
        <div className="service-component-box-left">
          <h3>Braces & Orthodontics</h3>
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.Click edit button to change this text.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>

          <ul>
            <li><IoCheckmarkDoneCircle  style={{color:"#009CFF",fontSize:"2rem"}}/> Crankshaft Repairs and Replacements</li>
            <li><IoCheckmarkDoneCircle  style={{color:"#009CFF",fontSize:"2rem"}}/> Ship’s vibration and acoustics</li>
            <li><IoCheckmarkDoneCircle  style={{color:"#009CFF",fontSize:"2rem"}}/> Diesel diagnostic & power measurements</li>
            <li><IoCheckmarkDoneCircle  style={{color:"#009CFF",fontSize:"2rem"}}/> Heaters Industrial Oil and Gas burners</li>
            <li><IoCheckmarkDoneCircle  style={{color:"#009CFF",fontSize:"2rem"}}/> On-site Repairs and Maintenance</li>
          </ul>
        </div>
        <div className="service-component-box-right">
          <img src="/a4.jpg" alt="" />
        </div>
      </div>

      <div className="service-description">
        <h1>Description</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

      </div>

      <div className="service-cart-box">
        <div className="service-cart">
            <img src="/download (1).svg" alt="" style={{width:"7rem"}}/>
            <h2>Prosthodontist</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <div className="service-cart">
            <img src="/download (2).svg" alt="" style={{width:"7rem"}}/>
            <h2>Prosthodontist</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <div className="service-cart">
            <img src="/download.svg" alt="" style={{width:"7rem"}}/>
            <h2>Orthodontist</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
      </div>

      <marquee behavior="alternate" direction="left">
       <img src="/Layer-10.png" alt="" />
       <img src="/Layer-20.png" alt="" />
       <img src="/Layer-21.png" alt="" />
       <img src="/Layer-22.png" alt="" />
       <img src="/Layer-23.png" alt="" />
      </marquee>
    </div>
  );
}

export default Service;
