import React from "react";
import EntertainmentCard from "../../../../common/components/cards/SubcatagoryCard";
import LiveArt from "../../../../assets/images/live-art.jpg";
import { useNavigate } from "react-router";
import SubcatagoryCard from "../../../../common/components/cards/SubcatagoryCard";

type CategorySectionProps = {
  sectionTitle: string;
};

const CategorySection: React.FC<CategorySectionProps> = ({ sectionTitle }) => {
  const navigate = useNavigate();

  return (
    <div className="h-[100vh] flex flex-col p-20">
      <p className="text-light-yellow text-5xl font-light font-Montserrat">
        {sectionTitle}
      </p>

      <div className="flex gap-5 mt-10">
       
       <SubcatagoryCard description="" image="" title=""/>
      </div>
    </div>
  );
};

export default CategorySection;
