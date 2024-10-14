import React from "react";
import HeroDescription from "../../../../common/components/hero-component/HeroDescription";
import { SubCategory } from "../../../../models/categories/categories";
import Subcategory from "../../Index";


interface CategoryProps {
  singleSubCategory: SubCategory
  ;

}

const SubCategoryDescription: React.FC<CategoryProps> = ({ singleSubCategory}) => {
  return (
    <HeroDescription
      isCategoryPage={false}
      title={singleSubCategory.title}
      descriptionOne={singleSubCategory.description}
    />
  );
};

export default SubCategoryDescription;
