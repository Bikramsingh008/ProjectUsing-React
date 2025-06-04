import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import OurFood from "./Components/OurFood";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Signin from "./Components/Signin";

function App() {

  const[count, setCount] = useState(0);

  const handleCart =()=>{
    setCount(count+1);
  }
  return (
    <>
      <BrowserRouter>
      <Header count={count} />
        <Routes>
          <Route path="/" element= {<Home handleCart = {handleCart}/>}/>
          <Route path="/aboutus" element= {<AboutUs/>}/>
          <Route path="/ourfood" element= {<OurFood handleCart = {handleCart}/>}/>
          <Route path="/signin" element = {<Signin/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
