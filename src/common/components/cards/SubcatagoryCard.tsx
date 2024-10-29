import React from "react";

type SubcategoryCardProps = {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
};

const SubcategoryCard: React.FC<SubcategoryCardProps> = ({ title, description, image ,onClick}) => {
  return (
    <div className="bg-primary  w-full h-auto rounded-2xl cursor-pointer" onClick={onClick}>
      <div className="flex flex-col items-center justify-center">
        <p className="text-light-yellow text-3xl font-normal p-5 pt-7 text-center font-Montserrat">
          {title}
        </p>
        <p className="text-light-grey text-base text-center font-raleway pt-2 px-5">
          {description}
        </p>
        <img src={image} alt={title+ " picture" } className="w-[340px] h-[244px] p-5 rounded-[50px]" />
      </div>
    </div>
  );
};

export default SubcategoryCard;
