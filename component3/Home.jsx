import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {NavLink} from 'react-router-dom';

import img1 from './../assets/images/img6.jpg';
import img2 from './../assets/images/img2.jpg';
import img3 from './../assets/images/img1.jpg';
import About from './About';
import Services from './Services';
import Contact from './Contact';


export default function Home() {
        const [index, setIndex] = useState(1);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };



  return (
   
    <>
       <Carousel activeIndex={index} onSelect={handleSelect} variant="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="container carousel-container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className='display-4 fw-bolder mb-5 mt-5 text-white text-center'>
                            Feel The Fresh Business <span style={{color:'orange'}}>Innovation</span> 
                        </h1>
                        <p className='lead text-center text-white fs-4 mb-5'>Lorem ipsum dolor sit deleniti repellendus at voluptate consequatur impedit? Iste consequatur rem nobis sequi, culpa quia?</p>
                        <div className="buttons d-flex justify-content-center">
                            <NavLink className="neon-button2 btn btn-outline-light me-4 px-4 py-2 rounded-pill" to="/contact">Join us</NavLink>
                            <NavLink className="neon-button btn btn-outline-light me-4 px-4 py-2 rounded-pill" to="/service">Our Service</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="container carousel-container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className='display-4 fw-bolder mb-5 mt-5 text-white text-center'>
                            Feel The Fresh Business <span style={{color:'#ff8c00'}}>Perspective</span>
                        </h1>
                        <p className='lead text-center text-white fs-4 mb-5'>Lorem ipsum dolor sit deleniti repellendus at voluptate consequatur impedit? Iste consequatur rem nobis sequi, culpa quia?</p>
                        <div className="buttons d-flex justify-content-center">
                        <NavLink className="neon-button2 btn btn-outline-light me-4 px-4 py-2 rounded-pill" to="/contact">Join us</NavLink>
                            <NavLink className="neon-button btn btn-outline-light me-4 px-4 py-2 rounded-pill" to="/service">Our Service</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className="container carousel-container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className='display-4 fw-bolder mb-5 mt-5 text-white text-center'>
                            Feel The Fresh Business <span style={{color:'#ff8c00'}}>Empowerment</span>
                        </h1>
                        <p className='lead text-center text-white fs-4 mb-5'>Lorem ipsum dolor sit deleniti repellendus at voluptate consequatur impedit? Iste consequatur rem nobis sequi, culpa quia?</p>
                        <div className="buttons d-flex justify-content-center">
                        <NavLink className="neon-button2 btn btn-outline-light me-4 px-4 py-2 rounded-pill" to="/contact">Join us</NavLink>
                            <NavLink className="neon-button btn btn-outline-light me-4 px-4 py-2 rounded-pill" to="/service">Our Service</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    <About/>
    <Services/>
    <Contact/>
    </>
  )
}
