import React from "react";

interface FitnessProgramCardProps {
  title: string;
  description: string;
}

const FitnessProgramCard: React.FC<FitnessProgramCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="relative w-full md:w-[400px] h-[283px] bg-light-blue flex flex-col items-center just rounded-2xl">
      <p className=" mt-4 font-Montserrat text-light-yellow text-4xl">
        {title}
      </p>
      <p className="mt-2 px-2 font-raleway text-base text-center text-light-grey font-light">
        <span>At </span>
        <span className="text-light-yellow">Move</span>
        <span>It </span>
        <span>{description}</span>
      </p>

      <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 bg-primary rounded-full flex items-center justify-center">
        <p className="text-light-yellow font-rale">Explore</p>
      </div>
    </div>
  );
};

export default FitnessProgramCard;
