import React from "react";
import "../../App.css";
import GoogleMap from "../GoogleMap"

function Contact() {
  return (
    <div className="App">
      <h1>Contact us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officiis repellendus ullam assumenda nam recusandae architecto voluptate eligendi at porro praesentium numquam itaque, quasi molestias totam. Unde ullam ratione quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      <h1>Visit us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officiis repellendus ullam assumenda nam recusandae architecto voluptate eligendi at porro praesentium numquam itaque, quasi molestias totam. Unde ullam ratione quia?
      </p>
      <GoogleMap className="map"/>
    </div>
  );
}

export default Contact;
