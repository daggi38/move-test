import React from 'react'
import HeroComponent from '../../../../common/components/hero-component/HeroComponent'
import HeroImage from "../../../../assets/images/hero-image.jpg"

const FitnessHero = () => {
  return (
    <HeroComponent
    title={"Get Fit, Have Fun: Discover Your Perfect Workout"}
    description="Unleash Your Potential: Fitness Starts Here!"
    imagePath={HeroImage}
  />
  )
}

export default FitnessHero