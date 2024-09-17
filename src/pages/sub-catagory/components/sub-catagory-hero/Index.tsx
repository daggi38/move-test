import React from "react";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";
import TradeMill from "../../../../assets/images/fitness-cardio.jpg";

const SubCategoryHero = () => {
  return (
    <HeroComponent
      title=" title here"
      description="subtitle here!"
      imagePath={TradeMill}
    />
  );
};

export default SubCategoryHero;
