import React from "react";
import { useNavigate } from "react-router";
import SubcategoryCard from "../../../../common/components/cards/SubcatagoryCard";

type CategorySectionProps = {
  sectionTitle: string;
};

const CategorySection: React.FC<CategorySectionProps> = ({ sectionTitle }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-8 md:p-12 lg:p-20">
      <h2 className="text-light-yellow text-3xl sm:text-4xl md:text-5xl font-light font-Montserrat mb-6 sm:mb-8 md:mb-10">
        {sectionTitle}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        <SubcategoryCard description="" image="" title="" />
      </div>
    </div>
  );
};

export default CategorySection;