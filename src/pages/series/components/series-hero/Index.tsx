import React from "react";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";
import TradeMill from "../../../../assets/images/fitness-cardio.jpg";
import { Series, SubCategory } from "../../../../models/categories/categories";

interface SeriesProps {
  series: Series;

}


const SeriesHero: React.FC<SeriesProps> = ({ series,}) => {
  
  return (
    <HeroComponent
      title={series.title}
      description={series.description}
      imagePath={TradeMill}
      isHomePage={true}
    />
  );
};

export default SeriesHero;
