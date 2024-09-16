import React from "react";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";
import TradeMill from "../../../../assets/images/fitness-cardio.jpg";

const FitnessDetailHero = () => {
  return (
    <HeroComponent
      title=" Cardiovascular Training"
      description="Unleash Your Potential: Fitness Starts Here!"
      imagePath={TradeMill}
    />
  );
};

export default FitnessDetailHero;
