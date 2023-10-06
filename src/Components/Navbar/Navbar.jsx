import React from "react";
import './navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1 className="appname">Todo</h1>
        <div className="themecontainer">
            <label htmlFor="theme">DarkMode</label>
            <input type="checkbox" className="checkbox" id="theme" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
