import React from 'react'
import { motion } from 'framer-motion'
import Asks from './Asks'
import Testimonial from './Testimonials/Testimonial'

export default function Services() {
  return (
    <div>
        <section id='service'>
        
        <div className="container my-5 py-5">
            <motion.div className="row" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4, duration:4}}>
                <div className="col-12 ">
                    <h3 className="fs-5 text-center mb-0 fw-bold" style={{color:'#ff8c00'}}>我们的服务</h3>
                    <h1 className="display-6 text-center mb-4">我们的 惊人的 服务</h1>
                    <hr className='w-25 mx-auto' style={{color:'#ff8c00'}}/>
                </div>
            </motion.div>
            <motion.div className="row mt-5" initial={{x:"-100vw"}} animate={{x:0}} transition={{type:'spring', delay:0.5}}>
                <div className="col-md-4">
                    <motion.div class="card p-3 border" whileHover={{scale:1.2, textShadow:"0px 0px 8px black", boxShadow:"0px 0px 8px black"}}>
                        <div class="card-body text-center">
                            <i className="fa fa-star-half fa-4x mb-4 text-warning"></i>
                            <h5 class="card-title mb-3 fs-4 fw-bold">文件夹管理
</h5>
                            <p class="card-text lead">文件夹管理是一种重要的组织和存储电脑文件的方式，它能帮助我们更好地分类、存储和查找文件，提高工作效率和数据整理的准确性</p>
                            
                        </div>
                        </motion.div>
                    </div>

                    <div className="col-md-4">
                    <div class="card p-3 border">
                        <div class="card-body text-center">
                            <i className="fa fa-laptop fa-4x mb-4 text-warning"></i>
                            <h5 class="card-title mb-3 fs-4 fw-bold">法律处理服务</h5>
                            <p class="card-text lead">法律处理服务是为了帮助个人和组织处理法律事务而提供的专业服务，包括法律咨询、合同起草、纠纷解决等。</p>
                            
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                    <div class="card p-3 border">
                        <div class="card-body text-center">
                            <i className="fa fa-user fa-4x mb-4 text-warning"></i>
                            <h5 class="card-title mb-3 fs-4 fw-bold">加密服务</h5>
                            <p class="card-text lead">加密服务是为保护数据安全提供的专业服务，通过使用密码学技术将敏感信息转化为加密形式，以保障机密性、完整性和防止未经授权的访问和数据泄露。</p>
                            
                        </div>
                        </div>
                    </div>
            </motion.div>
            

            <motion.div className="row mt-5" initial={{x:"-100vw"}} animate={{x:0}} transition={{type:'spring', delay:1.2}}>
                <div className="col-md-4">
                    <div class="card p-3 border">
                        <div class="card-body text-center">
                            <i className="fa fa-mobile fa-4x mb-4 text-warning"></i>
                            <h5 class="card-title mb-3 fs-4 fw-bold">文件夹管理</h5>
                            <p class="card-text lead">文件夹管理是一种重要的组织和存储电脑文件的方式，它能帮助我们更好地分类、存储和查找文件，提高工作效率和数据整理的准确性</p>
                            
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                    <div class="card p-3 border">
                        <div class="card-body text-center">
                            <i className="fa-duotone fa-bookmark fa-4x mb-4 text-warning"></i>
                            <h5 class="card-title mb-3 fs-4 fw-bold">法律处理服务</h5>
                            <p class="card-text lead">法律处理服务是为了帮助个人和组织处理法律事务而提供的专业服务，包括法律咨询、合同起草、纠纷解决等。</p>
                            
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                    <div class="card p-3 border">
                        <div class="card-body text-center">
                            <i className="fa-duotone fa-user fa-4x mb-4 text-warning"></i>
                            <h5 class="card-title mb-3 fs-4 fw-bold">加密服务</h5>
                            <p class="card-text lead">加密服务是为保护数据安全提供的专业服务，通过使用密码学技术将敏感信息转化为加密形式，以保障机密性、完整性和防止未经授权的访问和数据泄露。</p>
                            
                        </div>
                        </div>
                    </div>
                    
            </motion.div>

                
            
        </div>

    </section>
    <Testimonial/>
    {/* <Asks/> */}
    </div>
  )
}
