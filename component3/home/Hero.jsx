import React from 'react'
import { useEffect, useRef } from 'react';
import './Hero.css';
import { NavLink } from 'react-router-dom';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';
import { motion } from 'framer-motion';
import { init } from 'ityped'
import Experience from '../experience/Experience';
import Works from '../Works/Works';



export default function Hero() {
  const textRef=useRef()
  useEffect(()=>{
    init(textRef.current,{
        backDelay:1500,
        showCursor:true,
        strings:[
            ' 我的终极心愿我的终极心愿 ',
            ' 我的一生愿望 ',
            ' 我的理想境界 ',
            ' 我的终极梦想 '
        ]
    })
  },[])

  return (
    
    <>
      <motion.div className='hero-container container'  >
        <video className='videoplay' src="/videos/video-3.mp4" autoPlay loop muted/>
        <div className="row justify-content-center mt-5" >
                    <motion.div className="col-md-8 hero-item " initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2, duration:5}}>
                        <h1 className='display-4 fw-bolder mb-5 mt-5 text-white text-center'>
                        我们的服务 <br/> <span className='heading-grad'><span ref={textRef}> </span></span> 
                        </h1>
                        <p className='lead text-center text-white fs-4 mb-5'>我的终极心愿我的终极心愿我的终极心愿</p>
                        <div className="buttons d-flex justify-content-center">
                            <NavLink className="neon-button2 btn btn-outline-light me-4 px-4 py-2 rounded-pill" to="/contact">加入我们</NavLink>
                            <NavLink className="neon-button btn btn-outline-light me-4 px-4 py-2 rounded-pill" to="/service">我们的服务</NavLink>
                        </div>
                    </motion.div>
                </div>
    </motion.div>
    <Experience/>
    <Works/>
    <About/>
    <Services/>
    
    <Contact/>

    </>
    

  )
}
