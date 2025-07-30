import React from "react";
import Navbar from "./navbar"
import HeroSection from "./hero";
import FeaturesSection from "./features";
import Reviews from "./review";
import PricingSection from "./pricing";
import Footer from "./footer";
import "./App.css"

function App (){
  return(
    <div>
      <Navbar/>

    <HeroSection/>
    <FeaturesSection/>
    <Reviews/>
    <PricingSection/>
    <Footer/>
    </div>
    

  )
}
export default App