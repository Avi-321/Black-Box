import React from 'react'
import "./Experience.css";
export default function Experience() {
  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle fw-bolder" style={{color:'orange'}}><h1>18+</h1></div>
        <span  style={{color: "black"}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle fw-bolder" style={{color:'orange'}}><h1>20+</h1></div>
        <span  style={{color: "black"}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle fw-bolder" style={{color: 'orange'}}><h1>15+</h1></div>
        <span  style={{color: "black"}}>companies </span>
        <span>Work</span>
      </div>

      <div class="curve"></div>

    </div>


    

  )
}
