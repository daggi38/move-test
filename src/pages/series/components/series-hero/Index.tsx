import React from "react";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";
import { Series } from "../../../../models/categories/categories";

interface SeriesProps {
  series: Series;
  isLoading: boolean;
}

const SeriesHero: React.FC<SeriesProps> = ({ series, isLoading }) => {
  return (
    <HeroComponent
      isLoading={isLoading}
      title={series.title}
      description={series.description}
      imagePath={series.images[0]?.path || ""}
      isHomePage={true}
    />
  );
};

export default SeriesHero;
