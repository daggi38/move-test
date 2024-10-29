import React from "react";
import HeroDescription from "../../../../common/components/hero-component/HeroDescription";
import { Series} from "../../../../models/categories/categories";

interface SeriesProps {
  series: Series;
}

const SeriesDescription: React.FC<SeriesProps> = ({ series }) => {
  return (
    <HeroDescription
      isCategoryPage={false}
      title={series.title}
      descriptionOne={series.description}
    />
  );
};

export default SeriesDescription;
