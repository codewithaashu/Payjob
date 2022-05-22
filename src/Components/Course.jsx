import React from 'react'
import Courses from './Courses'
import Footer from './Footer'
import Navbar from './Navbar'

const Course = () => {
  document.title="Courses | PayJob";
  return (
    <>
    <Navbar/>
    <Courses/>
    <Footer/>
    </>
  )
}

export default Course