import * as React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from "./Components/About";
import Courses from "./Components/Courses";
import ContactUs from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} title ={"Home"} />
        <Route path="/about" element={<AboutUs/>}  title ={"About"}/>
        <Route path="/courses" element={<Courses/>} title ={"Courses"} />
        <Route path="/contactus" element={<ContactUs/>} title ={"Contact Us"} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;