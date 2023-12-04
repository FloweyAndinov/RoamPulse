import React from 'react'
import Contacts from 'src/components/contact/Contacts'
import { Footer } from 'src/components/footer/footer'
import { NavbarComp } from 'src/components/navbar/navbarcomp'

const ContactsPage = () => {
  return (
    <>
    <NavbarComp/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default ContactsPage