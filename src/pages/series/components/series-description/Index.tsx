import React from "react";
import HeroDescription from "../../../../common/components/hero-component/HeroDescription";
import { SubCategory } from "../../../../models/categories/categories";
import Subcategory from "../../Index";


interface SeriesProps {
  singleSubCategory: SubCategory
  ;

}

const SeriesDescription: React.FC<SeriesProps> = ({ singleSubCategory}) => {
  return (
    <HeroDescription
      isCategoryPage={false}
      title={singleSubCategory.title}
      descriptionOne={singleSubCategory.description}
    />
  );
};

export default SeriesDescription;
