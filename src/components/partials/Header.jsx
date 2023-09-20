import React from "react";
import "../../styles/Header.css";
import Carousel from 'react-bootstrap/Carousel';


function Footer() {

  return (
    <Carousel>
      <Carousel.Item className="image-container1">
       <img  className="image-carousel" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="image-container2">
      <img className="image-carousel" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="image-container3">
      <img className="image-carousel"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  /*  
  return (
    <div className="image-container">    
    </div>
  );*/
}

export default Footer;