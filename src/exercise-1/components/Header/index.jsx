import React from 'react';
import {NavLink} from 'react-router-dom'

import './index.css'

const Header = () => {

  const navActiveStyle = {
    fontWeight: "bold",
    color: "red",
    textDecoration: "underline"
  }
  return (
    <div className="header" style={{
      margin: "0 auto",
      width: "400px"
    }}>
      {/* <Redirect to="/"/> */}
      <NavLink to="/" activeStyle={navActiveStyle}
      isActive={(match, location) => match.isExact}
      >home</NavLink>
      <NavLink to="/products" activeStyle={navActiveStyle}>products</NavLink>
      <NavLink to="/myprofile" activeStyle={navActiveStyle}>myProfile</NavLink>
      <NavLink to="/about" activeStyle={navActiveStyle}>about</NavLink>
      
    </div>
  )
}


export default Header;