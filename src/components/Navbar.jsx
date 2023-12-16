import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <div className="py-4 shadow-sm">
        <div className="container">
          <img src={logo} alt="logo" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
