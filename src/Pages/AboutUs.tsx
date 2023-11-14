import React from 'react'
import AboutPhoenix from '../Components/AboutComponents/AboutPhoenix'
import MemberCard from '../Components/AboutComponents/MemberCard'
import TeamComponent from '../Components/AboutComponents/TeamComponent'

const AboutUs = () => {
  return (
    <div className='w-full'>
        <AboutPhoenix />
        <TeamComponent />
    </div>
  )
}

export default AboutUs