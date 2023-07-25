import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Banner from './component/Banner';
import { Routes, Route} from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';
import Hero from './component/home/Hero';
import Logout from './component3/Logout';

function App() {
  return (
    <>
    {/* <Banner/> */}
    <Navbar/>
    
    <Routes>
      <Route exact path="/" element={<Hero/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/service" element={<Services/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
      <Route exact path="/logout" element={<Logout/>} />
    </Routes>
    
    {/* <Home/>
    <About/>
    <Services/>
    <Contact/> */}
    <Footer/>
    </>
  );
}

export default App;
