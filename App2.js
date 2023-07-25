import './App.css';
import About from './component3/About';
import Contact from './component3/Contact';
import Footer from './component3/Footer';
import Home from './component/Home';
import Navbar from './component3/Navbar';
import Services from './component3/Services';
import Banner from './component/Banner';
import { Routes, Route} from 'react-router-dom';
import Login from './component3/Login';
import Register from './component3/Register';
import Dashboard from './component3/Dashboard';
import Hero from './component3/home/Hero';
import Logout from './component3/Logout';
import ProtectedRoute from './ProtectedRoute';
import { useEffect, useState } from 'react';
import  axios  from 'axios';
import Admin from './admin/Admin';
import ProtectedRouted from './ProtectedRouted';
import { Navigate} from 'react-router-dom';
import FAQ from './admin/scenes/faq/index';
import Contacts from './admin/scenes/contacts/index';
import Invoices from './admin/scenes/invoices/index';
import Form from './admin/scenes/form/index';
import Team from './admin/scenes/team/index';



function App() {
  const [auth, setauth]=useState(false);
  const [auth1,setauth1]=useState(true);


  
  const [admin,setAdmin]=useState(false);
    

  const isLoggedIn=async ()=>{
    try{
      const res=await fetch('/auth',{
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }, 
        credentials: "include"
      });

      

      if(res.status === 200){
        
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }
      const data = await res.json();
      console.log(data.usertype);
      if(data.usertype=== "Admin"){
        setAdmin(true);
      }

    } catch(err){
      console.log(err);
    }
  }

  // const checkAdmin=()=>{
    
  //   axios.get('http://localhost:3001/getuser')
  //   .then(users=>setData(users.data))
  //   .catch(err=>console.log(err))

  //   if(data.UserType == 'Admin')
  //   {
  //     setAdmin(true);
  //   }
  // }

  useEffect(()=>{
    isLoggedIn();
    
    
    
  },[]);

  return (
    <>
    {/* <Banner/> */}
    
    <Navbar auth={auth1} admin={admin}/>
    
    {/* admin?(<Admin/>):(<Hero/>); */}
    <Routes>
      <Route exact path="/" element={<Hero/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/service" element={<Services/>} />
      <Route exact path="/contact" element={<Contact/>} />

      <Route element={<ProtectedRoute auth={auth1}/>}>
        <Route exact path="/login" element={<Login/>} /></Route>
      <Route element={<ProtectedRoute auth={auth1}/>}>  
        <Route exact path="/register" element={<Register/>} /></Route>

    <Route element={<ProtectedRouted auth={auth} admin={admin}  />}>  
            <Route exact path="/admin" element={<Admin/>} />  

            <Route path="/team" element={<Team />} />

          </Route>
        

      <Route element={<ProtectedRoute auth={auth}/>}>  
        <Route exact path="/dashboard" element={<Dashboard/>} /></Route>
      <Route element={<ProtectedRoute auth={auth}/>}>  
        <Route exact path="/logout" element={<Logout/>} />
      </Route>

      
    </Routes>
    
      
    
    
    <Footer/>
    </>
  );
}

export default App;
