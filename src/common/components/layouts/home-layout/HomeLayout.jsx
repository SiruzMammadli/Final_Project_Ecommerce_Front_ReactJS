import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
  return (
    <React.Fragment>
        <Header/>
          <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}
