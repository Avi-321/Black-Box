import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Register() {

  const navigate= useNavigate();
  

  const [user,setUser]=useState({
    username:"",
    email: "",
    password: "",
    UserType: "",
    secretKey: ""
  })

  // handle input
  const handleInput =(event)=>{
    let name=event.target.name;
    let value= event.target.value;

    setUser({...user,[name]:value});
  }

  // handle submit
  const handleSubmit =async (event)=>{

    if(user.UserType=='Admin' && user.secretKey!='1234'){
      event.preventDefault();
      alert("Invalid admin");

    }
    else{

      event.preventDefault();

    const {username, email, password, UserType}=user;
    try{
      const res= await fetch('/register', {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username, email, password, UserType
        })
      })

      if(res.status === 422 || !res){
        window.alert("Something went wrong")
      }else{
        window.alert("Registered successfully");
        navigate('/login')
      }
    }catch (error){
      console.log(error)
  }

    }
    
  } 


  return (
    <div className='d-flex justify-content-center align-items-center mt-5' > 
        <motion.div className="container shadow my-5 " initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:4}}>
        <div className="row justify-content-end">
          <div className="form col-md-5 d-flex flex-column justify-content-center align-items-center order-2">
            <h1 className="display-4">朋友你好</h1>
            <p className='lead text-center'>输入您的详细信息进行注册</p>
            <h5 className='mb-4'>或者</h5>
            <NavLink to='/login' className="btn btn-outline-light rounded-pill pb-2 w-50">登录</NavLink>
          </div>
          <div className="col-md-6 p-5 mt-5">
            <h1 className="display-6 fw-bolder mb-5">登记</h1>
            <Form onSubmit={handleSubmit} method="POST">
              <div className='d-flex gap-2 mb-2'>
              <Form.Label>Register as:</Form.Label>
                      <Form.Check 
                    type='radio'
                    name='UserType'
                    Value='User'
                    label='User'
                    onChange={handleInput}
                  />
                  <Form.Check 
                    type='radio'
                    name='UserType'
                    Value='Admin'
                    label='Admin'
                    onChange={handleInput}
                  />
              </div>
              {user.UserType=='Admin'?
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Secret key</Form.Label>
                    <Form.Control id='name' type="text" name='secretKey' value={user.secretKey} onChange={handleInput} placeholder="Enter Secret key" />
                    
                  </Form.Group>
                  :null
              }

              
                


            <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>电子邮件地址</Form.Label>
                  <Form.Control id='name' type="text" name='username' value={user.username} onChange={handleInput} placeholder="Enter Name" />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email' value={user.email} onChange={handleInput} placeholder="Enter email" />
                  <Form.Text className="text-muted">
                  我们绝不会与其他人分享您的电子邮件。
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' value={user.password} onChange={handleInput} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="I Agree Terms and Conditions" />
                </Form.Group>
                <Button variant="" className='btn btn-warning mt-4 rounded-pill w-100' type="submit">
                登记
                </Button>
              </Form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
