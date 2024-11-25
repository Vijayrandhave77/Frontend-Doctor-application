import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <div className="fleft">
          <h3>Medicalist Clinic © All Rights Reserved By Webinane.</h3>  
        </div>
        <div className="fright">
            <div className="facebook"><FaFacebook /></div>
            <div className="twitter"><FaTwitter /></div>
            <div className="instagram"><FaInstagram /></div>
        </div>
    </div>
  )
}

export default Footer
