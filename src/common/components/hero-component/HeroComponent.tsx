import React from "react";

interface HeroComponentProps {
  imagePath: string;
  title: string;
  description: string;
}

const HeroComponent: React.FC<HeroComponentProps> = ({
  imagePath,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="relative w-full h-[95vh] justify-center items-center ">
        <img
          src={imagePath}
          alt="image of a gym"
          className="w-full h-full object-cover rounded-none md:rounded-2xl"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary  to-transparent opacity-70 via-primary"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
          <p className="text-3xl md:text-5xl lg:text-6xl mb-4 font-Montserrat font-bold text-light-yellow w-1/2">
            {title}
          </p>
          <p className="text-4xl text-light-grey  font-medium font-raleway font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
