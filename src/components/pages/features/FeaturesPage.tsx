import React from 'react'
import Features from 'src/components/features/features'
import { Footer } from 'src/components/footer/footer'
import { Header } from 'src/components/header/header'
import { NavbarComp } from 'src/components/navbar/navbarcomp'

const FeaturesPage = () => {
  return (
    <>
        <NavbarComp/>
        <Features/>
        <Footer/>
    </>
  )
}

export default FeaturesPage