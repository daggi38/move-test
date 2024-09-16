import React from "react";
import HeroDescription from "../../../../common/components/hero-component/HeroDescription";

const EntertainmentDescription = () => {
  return (
    <HeroDescription
    isDetailPage={true}
      descriptionOne="Welcome to MoveIt Entertainment, where fun meets variety! Dive into a world of captivating videos, from laugh-out-loud comedy clips to thought-provoking documentaries, and everything in between. Our extensive library offers something for everyone, ensuring endless entertainment for all ages and tastes"
      title="Entertainment"
      descriptionTwo="Whether you're looking to unwind after a long day or spice up your downtime, MoveIt Entertainment is here to keep you entertained and engaged. Discover new favorites, explore diverse genres, and enjoy endless hours of high-quality content. Get ready to relax, laugh, and be entertained with MoveIt!"
    />
  );
};

export default EntertainmentDescription;
