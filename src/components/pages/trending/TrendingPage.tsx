
import { NavbarComp } from 'src/components/navbar/navbarcomp'
import React from "react"
import classnames from "classnames"
import Trending from 'src/components/trending/Trending'

import Paris from "src/assets/paris.jpg"
import Rome from "src/assets/rome_light.jpg"
import Santorini from "src/assets/santorini_light.jpg"
import { Footer } from 'src/components/footer/footer'


const TrendingPage = () => {
  return (
    <>
    <NavbarComp/>
    <Trending image={Paris} title="Paris" paragraph='Paris, the epitome of sophistication, invites you to
              a cityscape adorned with iconic landmarks like the Eiffel Tower and the Louvre.
                With its timeless elegance and vibrant energy,
                  Paris promises an unforgettable blend of history, romance, and culinary delights.
                  Explore the city that captivates with every cobblestone street and cultural treasure.'/>
   
   <Trending image={Rome} title="Rome" paragraph='Rome, the eternal city, weaves history and culture through iconic sites
    like the Colosseum and Vatican. Explore charming streets, savor Italian cuisine, and immerse yourself in the captivating
     blend of antiquity and modern vitality. A sensory feast and a timeless journey through history.'/>
   
   <Trending image={Santorini} title="Santorini" paragraph="Santorini, a gem in the Aegean, enchants with its iconic cliffside architecture and stunning caldera views. Explore Oia's narrow streets, savor Greek cuisine by the sea, and unwind on volcanic beaches. This idyllic island seamlessly blends natural beauty with cultural allure for an unforgettable Mediterranean escape."/>


    <Footer/>
    </>
    
  )
}

export default TrendingPage