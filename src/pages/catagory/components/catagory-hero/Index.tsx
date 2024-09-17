import React from 'react'
import HeroComponent from '../../../../common/components/hero-component/HeroComponent'
import HeroImage from "../../../../assets/images/hero-image.jpg"

const CatagoryHero = () => {
  return (
    <HeroComponent
    title={"title here"}
    description="subtitle here!"
    imagePath={HeroImage}
  />
  )
}

export default CatagoryHero