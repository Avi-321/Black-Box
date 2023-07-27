import React from 'react'
import Experience from '../experience/Experience';
import Works from '../Works/Works';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';
import './Hero2.css';
import img1 from '../../assets/images/img3.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img1.jpg';

export default function Hero2() {
  return (
    <>
            <div id="wrapper">
  <div className="owl-carousel" id="slider-area">
    <div style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOwAki87foDeyWGGDs1EeiN5reADCgfgN67vb_WgH&s")'}} />
    <div style={{backgroundImage: 'url("https://ik.imagekit.io/ikmedia/backlit.jpg")'}} />
    <div style={{backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/55fba586e4b0ee63468b8451/1527578290521-L177MAQAVFDNERXD78ZX/BLUE+-+turtle.jpg")'}} />
  </div>
  
  <div className="slider-text">
    <h2>Creative <span>Agency</span></h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, beatae.</p><a href="#">learn More</a> <a className="btn" href="#">Contact Us</a>
  </div>
</div>
    <Experience/>
    <Works/>
    <About/>
    <Services/>
    
    <Contact/>

    </>
    
  )
}
