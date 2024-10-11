import React from "react";
import HeroComponent from "../../../../common/components/hero-component/HeroComponent";
import HeroImage from "../../../../assets/images/hero-image.jpg";
import { Categories } from "../../../../models/categories/categories";

interface CategoryProps {
  category: Categories;
  isLoading:boolean
}

const CategoryHero: React.FC<CategoryProps> = ({ category ,isLoading}) => {
  return (
    <HeroComponent
    
      title={category.page_title}
      description={category.page_sub_title}
      imagePath={HeroImage}
    />
  );
};

export default CategoryHero;
