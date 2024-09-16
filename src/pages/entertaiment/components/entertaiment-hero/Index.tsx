import React from 'react'
import HeroComponent from '../../../../common/components/hero-component/HeroComponent'
import HeroImage from "../../../../assets/images/hero-image.jpg"

const EntertainmentHero = () => {
  return (
    <HeroComponent
    title={"Escape the Ordinary: Entertain Yourself with MoveIt"}
    description="Binge-Worthy Content: Your Entertainment Awaits!"
    imagePath={HeroImage}
  />
  )
}

export default EntertainmentHero