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
        <Trending image={Paris} title="Event Tracker" paragraph='With our Event Tracker feature, never miss an event in Paris, the epitome of sophistication. Stay updated with the latest happenings and plan your visit accordingly.'/>
   
   <Trending image={Rome} title="Best Price" paragraph='Experience Rome, the eternal city, without breaking the bank. Our Best Price feature ensures you get the best deals on flights, hotels, and experiences.'/>
   
   <Trending image={Santorini} title="AI Maps" paragraph="Navigate the gem of the Aegean, Santorini, with ease. Our AI Maps feature provides intelligent routing to optimize your travel experience."/>
        <Footer/>
    </>
  )
}

export default FeaturesPage