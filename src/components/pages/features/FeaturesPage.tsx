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
        <Trending image={"https://support-cdn.route4me.com/2020/09/5f32c0a0-route-optimization-for-the-shortest-route.jpg"} title="Event Tracker" paragraph='With our Event Tracker feature, never miss an event in Paris, the epitome of sophistication. Stay updated with the latest happenings and plan your visit accordingly.'/>
   
   <Trending image={"https://www.reviewme.com/wp-content/uploads/2019/07/reviews.png"} title="Best Price" paragraph='Experience Rome, the eternal city, without breaking the bank. Our Best Price feature ensures you get the best deals on flights, hotels, and experiences.'/>
   
   <Trending image={"https://ik.imgkit.net/3vlqs5axxjf/PCWW/uploadedImages/Articles/News/2023/June/LIH%20generative%20ai%20map%20interface.jpg"} title="AI Maps" paragraph="Navigate the gem of the Aegean, Santorini, with ease. Our AI Maps feature provides intelligent routing to optimize your travel experience."/>
        <Footer/>
    </>
  )
}

export default FeaturesPage