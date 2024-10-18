import React from "react";
import HeroDescription from "../../../../common/components/hero-component/HeroDescription";
import { SubCategory } from "../../../../models/categories/categories";
import Subcategory from "../../Index";


interface CategoryProps {
  subCategory: SubCategory
  

}

const SubCategoryDescription: React.FC<CategoryProps> = ({ subCategory}) => {
  return (
    <HeroDescription
      isCategoryPage={false}
      title={subCategory.title}
      descriptionOne={subCategory.description}
    />
  );
};

export default SubCategoryDescription;
