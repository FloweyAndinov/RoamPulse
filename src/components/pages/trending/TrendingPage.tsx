
import { NavbarComp } from 'src/components/navbar/navbarcomp'
import React from "react"
import classnames from "classnames"
import Trending from 'src/components/trending/Trending'

import Paris from "src/assets/paris.jpg"
import Rome from "src/assets/rome_light.jpg"
import Santorini from "src/assets/santorini_light.jpg"
import Kyoto from "src/assets/kyoto2.jpg"
import Istanbul from "src/assets/istanbul2.jpg"
import Sofia from "src/assets/sofia2.jpeg"
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
   
   <Trending image={Santorini} title="Santorini" paragraph="Santorini, a gem in the Aegean, enchants with its iconic cliffside
    architecture and stunning caldera views. Explore Oia's narrow streets, savor Greek cuisine by the sea, and unwind on volcanic beaches. 
    This idyllic island seamlessly blends natural beauty with cultural allure for an unforgettable Mediterranean escape."/>

<Trending 
    image={Kyoto} 
    title="Kyoto" 
    paragraph="Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district."
/>

<Trending 
    image={Istanbul} 
    title="Istanbul" 
    paragraph="Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks also remain. The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics."
/>

<Trending 
    image={Sofia} 
    title="Sofia" 
    paragraph="Sofia, the capital of Bulgaria, is an ancient city with a rich history. The city is known for its mineral and thermal springs. Monuments that reflect more than 2,000 years of history include the Roman-era Serdica Fortress and the Byzantine-era Rotunda St. George, among many others. The vast, neo-Byzantine Alexander Nevsky Cathedral is one of the city’s symbols and primary tourist attractions."
/>


    <Footer/>
    </>
    
  )
}

export default TrendingPage