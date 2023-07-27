import React from 'react';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';



export default function nav(props) {

 
  
  
  
  return (
//     <div> <i class="fa-solid fa-cloud-arrow-up"></i>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
//   <div className="container">
//     <a className="navbar-brand fw-bolder fs-4 mx-auto" href="#"><i className="fa-brands fa-servicestack"></i>Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto fw-bolder gap-2 mb-2 mb-lg-0">
//         <li className="nav-item">
//         <button className='navbtn' onClick={() => handleMenuItemClick('home')}>
//           Home</button>
//         </li>
//         <li className="nav-item">
//         <button className='navbtn' onClick={() => handleMenuItemClick('about')}>
//           About</button>
//         </li>
//         <li className="nav-item">
//         <button className='navbtn' onClick={() => handleMenuItemClick('service')}>
//           Services</button>
//         </li>
//         <li className="nav-item">
//         <button className='navbtn' onClick={() => handleMenuItemClick('contact')}>
//           Contact</button>
//         </li>
        
        
        
//       </ul>
//       <button className="btn btn-outline-danger px-4 ms-auto rounded-pill fw-bolder">
//         <i className="fa fa-sign-in me-2"></i>Login</button>
//       <button className="btn btn-outline-danger px-4 ms-2 rounded-pill fw-bolder"><i className="fa fa-user-plus me-2"></i>Register</button>


//     </div>
//   </div>
// </nav>
//     </div>


    <>
          <Navbar expand="lg" className="navbar bg-secondary  fixed-top  ">
      <Container >
        <Navbar.Brand href="/" className=' fw-bolder fs-3 mx-auto'>标志</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navlinks fw-bolder gap-2">
            <NavLink to="/"><button className='navbtn text-white'>
            主页</button></NavLink>
            <NavLink to="/about"><button className='navbtn text-white'>
            关于我们 </button></NavLink>
            <NavLink to="/service"><button className='navbtn text-white'>
            服务</button></NavLink>
            <NavLink to="/contact"><button className='navbtn text-white'>
            接触</button></NavLink>
          </Nav>
          <div className='ms-5' >
            {props.auth ?
            <>
          <NavLink to="/login" className="btn navbtn2 btn-outline-warning px-4 ms-auto rounded-pill fw-bolder" >
           <i className="fa fa-sign-in me-2"></i>登录</NavLink>
          <NavLink to="/register" className="btn navbtn2 btn-outline-warning px-4 ms-2 rounded-pill fw-bolder"><i className="fa fa-user-plus me-2"></i>登记</NavLink>
          </>
          :(!props.auth && props.admin)?
          <>
          <NavLink to="/dashboard" className="btn navbtn2 btn-outline-warning px-4 ms-2 rounded-pill fw-bolder"><i className="fa-solid fa-cloud-arrow-up me-2"></i>仪表板</NavLink>
          <NavLink to="/admin" className="btn navbtn2 btn-outline-warning px-4 ms-2 rounded-pill fw-bolder"><i className="fa fa-user me-2"></i>Admin</NavLink>
          <NavLink to="/logout" className="btn navbtn2 btn-outline-warning px-4 ms-2 rounded-pill fw-bolder"><i className="fa fa-sign-out me-2"></i>Logout</NavLink>

          
          </>:
          <>
          <NavLink to="/dashboard" className="btn navbtn2 btn-outline-warning px-4 ms-2 rounded-pill fw-bolder"><i className="fa fa-user-plus me-2"></i>仪表板</NavLink>

          <NavLink to="/logout" className="btn navbtn2 btn-outline-warning px-4 ms-2 rounded-pill fw-bolder"><i className="fa fa-sign-out me-2"></i>Logout</NavLink>
          </>

          }
          
          </div>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </>


  )
}
