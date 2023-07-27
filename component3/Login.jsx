import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {motion} from 'framer-motion'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [user, setUser]= useState({
    email:'',
    password:''
  });

  const navigate= useNavigate();
// handle input
const handleChange=(event)=>{
  let name=event.target.name;
  let value=event.target.value;

  setUser({...user,[name]:value});

}

// handle submit
const handleSubmit=async (event)=>{
  event.preventDefault();

  const {email, password}=user;

  try{
    const res=await fetch('/login',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })

    });
    if(res.status === 400 || !res){
      window.alert("invalid credentials");
    }
    else{
      window.alert("logged in : )");
      window.location.reload();
      navigate('/');
    }

  }catch(err){
    console.log(err);
  }
}

  return (
    <div className='mt-5 login-box d-flex justify-content-center align-items-center'>
      <motion.div className="container shadow my-5 " initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:4}}>
        <div className="row">
          <div className="form col-md-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4">欢迎回来</h1>
            <p className='lead text-center'>输入您的凭据进行登录</p>
            <h5 className='mb-4'>或者</h5>
            <NavLink to='/register' className="btn btn-outline-light rounded-pill pb-2 w-50">登记</NavLink>
          </div>
          <div className="col-md-6 p-5 mt-5">
            <h1 className="display-6 fw-bolder mb-5">登录</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>电子邮件地址</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} />
                  <Form.Text className="text-muted">
                  我们绝不会与其他人分享您的电子邮件。
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>密码</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="记住账号" />
                </Form.Group>
                <Button variant="primary" className='mt-4 btn btn-warning w-100 rounded-pill ' type="submit">
                登录
                </Button>
              </Form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
