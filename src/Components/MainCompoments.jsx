import React from 'react'
import { NavLink } from 'react-router-dom'


function MainCompoments() {

  return (
    <div className='main-components'>
      <div className="main-left">
        <img src="/mainimg.png" alt="" />
      </div>
      <div className="main-right">
        <h1>Skin Care</h1>
        <p>Hairness the power worrt-free as our solution ensures 0% side effects for optimal result. Committed To Skin</p>
        <button className='read-more'><NavLink to="/about">Read More</NavLink></button>
      </div>
    </div>
  )
}

export default MainCompoments
