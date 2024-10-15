import React from "react";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";
import TradeMill from "../../../../assets/images/fitness-cardio.jpg";
import { Series, SubCategory } from "../../../../models/categories/categories";

interface SeriesProps {
  singleSeries: Series;

}


const SeriesHero: React.FC<SeriesProps> = ({ singleSeries,isBusy}) => {
  
console.log(singleSeries)
  return (
    <HeroComponent
      title={singleSeries.title}
      description={singleSeries.description}
      imagePath={TradeMill}
      isHomePage={true}
    />
  );
};

export default SeriesHero;
