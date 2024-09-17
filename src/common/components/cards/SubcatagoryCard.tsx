import React from "react";

type SubcategoryCardProps = {
  title: string;
  description: string;
  image: string;
};

const SubcategoryCard: React.FC<SubcategoryCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-primary w-[395px] rounded-2xl">
      <div className="flex flex-col items-center justify-center">
        <p className="text-light-yellow text-4xl font-normal p-5 text-center font-Montserrat">
          {title}
        </p>
        <p className="text-light-grey text-base text-center font-raleway">
          {description}
        </p>
        <img src={image} alt={title} className="w-[340px] h-[244px] p-5 rounded-[50px]" />
      </div>
    </div>
  );
};

export default SubcategoryCard;
