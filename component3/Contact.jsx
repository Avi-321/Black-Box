import React from 'react';
import Lottie from 'lottie-react';
import Contactus from './../assets/images/contact-us.json'
import { motion } from 'framer-motion'
import Asks from './Asks';

export default function Contact() {
  return (
    <div>
        <section id='contact'>
        
        <div className="container my-5 py-5 ">
            <div className="row mb-5">
                <motion.div className="col-12" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration:3}}>
                <h3 className="fs-5 text-center mb-0" style={{color:'#ff8c00'}}>联系我们</h3>
                    <h1 className="display-6 text-center mb-4">有一些 问题！</h1>
                    <hr className='w-25 mx-auto' style={{color:'#ff8c00'}}/>
                </motion.div>
            </div>
            <div className="row">
                <motion.div className="col-6" initial={{x:"-100vw"}} animate={{x:0}} transition={{type:'spring', delay:0.5, duration:1}}>
                    <div style={{width:'80%'}}>
                        <Lottie animationData={Contactus}/>
                    </div>
                </motion.div>
                <motion.div className="col-6 form_part " initial={{x:"100vw"}} animate={{x:0}} transition={{type:'spring', delay:0.5, duration:1}}>
                    <form action="https://png.pngtree.com/element_our/20190524/ourmid/pngtree-cartoon-man-working-image_1102677.jpg" className='m-2 p-2'>
                        <div class="mb-3">
                        <label for="name" class="form-label fw-bold">你的名字</label>
                        <input type="text" class="form-control" id="name" placeholder="Ram"/>
                        </div>

                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label fw-bold">电子邮件地址</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label fw-bold">您的留言</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <button type='submit' className='btn navbtn2 btn-outline-warning fw-bold'>发信息<i className="fa fa-paper-plane ms-2"></i></button>
                    </form>
                </motion.div>
            </div>
        </div>

    </section>
    
    </div>
  )
}
