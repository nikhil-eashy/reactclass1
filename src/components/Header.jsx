import React from "react";
import './topbar.css'
function Header() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">PROJECT X</span>
        </div>
        <div className="topright">
          <div className="topicontainer">
            Home
          </div>
          <div className="topicontainer">
            ABOUT
          </div>
          <div className="topicontainer">
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
