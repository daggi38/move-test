import React from "react";
import SearchBar from "../search-bar/SearchBar";
import MoveItText from "../../helper/TitleHelper";

interface HeroDescriptionProps {
  title: string;
  descriptionOne: string;
  descriptionTwo?: string;
  descriptionThree?: string;
  isCategoryPage?: boolean;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({
  title,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  isCategoryPage = false,
}) => {
  return (
    <div className="relative flex flex-col lg:grid xl:grid-cols-[2fr_1fr_2fr] -mt-16">
      <div className="xl:hidden w-full px-5 mb-4  flex items-center justify-center">
        <div className=" w-full md:w-1/2">
          <SearchBar />
        </div>
      </div>

      <div className="bg-primary rounded-none md:rounded-tr-3xl flex items-center justify-center px-5 sm:px-10 md:px-20 py-10">
        <div className="text-light-grey font-raleway flex flex-row items-center gap-3 h-auto lg:h-[40vh]">
          {isCategoryPage ? (
            <MoveItText className="text-2xl sm:text-3xl md:text-5xl font-raleway font-light" />
          ) : (
            ""
          )}
          <p className="text-2xl sm:text-3xl md:text-5xl font-raleway font-light">
            {title}
          </p>
        </div>
      </div>

      <div className="hidden xl:flex flex-col gap-2 items-center py-0">
        <div className="w-full px-5">
          <SearchBar />
        </div>
        <div className="bg-primary w-full flex-grow"></div>
      </div>

      <div className="bg-primary rounded-none md:rounded-tl-3xl flex items-center justify-center py-10">
        <div className="text-light-grey font-raleway flex flex-row gap-5 md:gap-10 text-xl md:text-2xl font-light">
          <div>
            <p className="text-sm md:text-base px-5 sm:px-10 md:px-20">
              {descriptionOne}
            </p>
            {descriptionTwo && (
              <p className="text-sm md:text-base px-5 sm:px-10 md:px-20 py-3 md:py-5">
                {descriptionTwo}
              </p>
            )}
            {descriptionThree && (
              <p className="text-sm md:text-base px-5 sm:px-10 md:px-20 py-3 md:py-5">
                {descriptionThree}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDescription;
