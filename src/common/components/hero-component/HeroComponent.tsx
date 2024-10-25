import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import ShimmerIndicator from "../shimmer-indicator/ShimmerIndicator";

interface HeroComponentProps {
  imagePath: string;
  title: string;
  description: string;
  isThankyouPage?: boolean;
  isHomePage?: boolean;
  isLoading: boolean;
}

const HeroComponent: React.FC<HeroComponentProps> = ({
  imagePath,
  title,
  description,
  isThankyouPage = false,
  isHomePage = false,
  isLoading,
}) => {
  const heroHeight = isHomePage ? "h-[60vh]" : "h-[95vh]";
  const navigate = useNavigate();

  const handleBackNavigation = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <div
        className={`relative w-full ${heroHeight} justify-center items-center`}
      >
        {!isHomePage && (
          <>
            <img
              src={imagePath}
              alt="image of a gym"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70 via-primary"></div>
          </>
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {isLoading ? (
            <div className="flex flex-col gap-5 items-center justify-center">
              <ShimmerIndicator count={1} height={100} width={500} />
              <ShimmerIndicator count={1} height={30} width={300} />
            </div>
          ) : (
            <>
              <p className="text-4xl md:text-5xl lg:text-6xl mb-4 font-Montserrat font-bold text-light-yellow w-full xl:w-1/2">
                {title}
              </p>
              <p className="text-2xl md:text-3xl text-light-grey font-raleway font-normal">
                {description}
              </p>
            </>
          )}

          {isThankyouPage && !isLoading && (
            <div
              onClick={handleBackNavigation}
              className="p-3 mt-5 bg-gradient-to-r from-light-yellow to-dark-yellow flex items-center justify-center rounded-full cursor-pointer"
            >
              <p className="text-white px-5">Back To Home</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
