import React from 'react'
import Lottie from 'lottie-react';
import Aboutus from './../assets/images/aboutus.json'
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';



import './About.css'
import { GridFilterInputMultipleSingleSelect } from '@mui/x-data-grid';
import Team from './Team';


export default function About() {
  return (
    <div>
      
        <section id="about">
            <div className="container ">
               <div className="row">
                <motion.div className="col-md-6" initial={{y:"100vw"}} animate={{y:0}} transition={{type:'spring', delay:0.5}}>
                    <div style={{width:'70%'}}>
                        <Lottie animationData={Aboutus}/>
                    </div>
                    
                </motion.div>
                <motion.div className="col-md-6" initial={{x:"100vw"}} animate={{x:0}} transition={{type:'spring', delay:.5}}>
                    <h2 className="fs-5 mb-0 fw-bold" style={{color:'#ff8c00'}}>关于我们</h2>
                    <h1 className="display-6 mb-2">我们 是 谁</h1>
                    <hr className='w-50' style={{color:'#ff8c00'}} />
                    <p className="lead mb-4">网络黑匣子（空中黑匣子或空中遗嘱）是第三方网络保管及传递平台。它是对不可预知死亡的一种后事提前准备。用户可将生前不方便告知或未及时告知的遗嘱、遗愿、隐私、财产信息及其它重要信息存放在网络遗嘱保管箱（网络黑匣子），以防突发性离世后信息丢失，未能为家人、亲戚或朋友获知，使用户生前财产及生活状况成为无法解开的谜团。积极使用网络遗嘱保管箱，可体现用户对生命的正确态度，以及对家人、亲戚、朋友的责任和关怀。
</p>
                      <button className="btn btn-warning me-4 px-4 py-2 rounded-pill">开始使用</button>
                    <button className="btn btn-outline-warning me-4 px-4 py-2 ms-2 rounded-pill">联系我们</button>
                </motion.div>
                </div> 


                <div className="row">
                        
                </div>


            </div>
        </section>
        <Team/>
    </div>
  )
}
