import React from 'react'
import Features from 'src/components/features/features'
import { Footer } from 'src/components/footer/footer'
import { Header } from 'src/components/header/header'
import { NavbarComp } from 'src/components/navbar/navbarcomp'
import Trending from 'src/components/trending/Trending'
import Paris from "src/assets/paris.jpg"
import Rome from "src/assets/rome_light.jpg"
import Santorini from "src/assets/santorini_light.jpg"

const FeaturesPage = () => {
  return (
    <>
        <NavbarComp/>
        <Trending image={Paris} title="Event Tracker" paragraph='Paris, the epitome of sophistication'/>
   
   <Trending image={Rome} title="Best Price" paragraph='Rome, the eternal city'/>
   
   <Trending image={Santorini} title="AI Maps" paragraph="Santorini, a gem in the Aegean."/>
        <Footer/>
    </>
  )
}

export default FeaturesPage