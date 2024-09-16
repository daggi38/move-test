import React from "react";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";
import LiveArt from "../../../../assets/images/live-art.jpg";

const EntertainmentDetailHero = () => {
  return (
    <HeroComponent
      title="Live Art Performance"
      description="Experience the Magic of Live Art Performance"
      imagePath={LiveArt}
    />
  );
};

export default EntertainmentDetailHero;
