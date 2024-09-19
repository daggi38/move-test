import React from "react";
import { Link } from "react-router-dom";

interface HeroComponentProps {
  imagePath: string;
  title: string;
  description: string;
  isThankyouPage?: boolean;
}

const HeroComponent: React.FC<HeroComponentProps> = ({
  imagePath,
  title,
  description,
  isThankyouPage = false,
}) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="relative w-full h-[95vh] justify-center items-center ">
        <img
          src={imagePath}
          alt="image of a gym"
          className="w-full h-full object-cover "
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary  to-transparent opacity-70 via-primary"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
          <p className="text-4xl md:text-5xl lg:text-6xl mb-4 font-Montserrat font-bold text-light-yellow w-full lg:w-1/2">
            {title}
          </p>
          <p className="text-2xl md:text-3xl text-light-grey   font-raleway font-normal">
            {description}
          </p>
          {isThankyouPage ? (
            <div className=" p-3 mt-5 bg-gradient-to-r from-light-yellow to-dark-yellow  flex items-center justify-center rounded-full">
              {" "}
              <Link to="/">
                {" "}
                <p className="text-white  px-5">Back To Home</p>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
