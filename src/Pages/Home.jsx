import React from 'react'
import HeroSection from '../components/Home_Hero_Section.jsx'
import Percentage_Section from '../components/Percentage_Section.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div>
        <HeroSection/>
        <Percentage_Section/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home