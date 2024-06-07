import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
// HomeTemplates dinh nghi cac thanh phần dung chung
const HomeTemplates = () => {
  return (
    <>
    <Header/>

{/* outlet dai dien cho components load ben trong HomeTemplates */}
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default HomeTemplates
