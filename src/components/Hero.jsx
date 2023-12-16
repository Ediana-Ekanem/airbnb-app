import React from "react";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <div>
      <div className="container d-flex justify-content-center mt-5">
        <img src={hero} alt="Hero Img" className="img-fluid  " />
      </div>
      <div className="container ">
        <h1 className="hero-header">Online Experiences</h1>
        <p className="hero-paragraph fw-bold">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
