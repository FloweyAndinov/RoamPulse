import React from 'react'
import { CommunityReactions } from 'src/components/community-reactions/community-reactions'
import Features from 'src/components/features/features'
import { Footer } from 'src/components/footer/footer'
import { Header } from 'src/components/header/header'
import { NavbarComp } from 'src/components/navbar/navbarcomp'
import { OurJourney } from 'src/components/our-journey/our-journey'
import TopDestinations from 'src/components/top-destinations/top-destinations'

const home = () => {
  return (
    <>
        <NavbarComp/>
        <Header/>
        <Features/>
        <OurJourney/>
        <TopDestinations/>
        <CommunityReactions/>
        <Footer/>
    </>
  )
}

export default home