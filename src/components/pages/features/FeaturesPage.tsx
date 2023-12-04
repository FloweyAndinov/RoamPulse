import React from 'react'
import Features from 'src/components/features/features'
import { Header } from 'src/components/header/header'
import { NavbarComp } from 'src/components/navbar/navbarcomp'

const FeaturesPage = () => {
  return (
    <>
        <NavbarComp/>
        <Features/>
    </>
  )
}

export default FeaturesPage