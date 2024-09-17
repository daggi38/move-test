import React from "react";
import SearchBar from "../search-bar/SearchBar";
import MoveItText from "../../helper/TitleHelper";

// Define the props interface with optional descriptions
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
    <div className="relative grid grid-cols-[2fr_1fr_2fr] -mt-16">
      <div className="bg-primary rounded-t-3xl flex items-center justify-center px-20 py-10">
        <div className="text-light-grey font-raleway flex flex-row items-center gap-3 h-[40vh]">
          {isCategoryPage ? (
            <MoveItText className="text-3xl sm:text-5xl font-raleway font-light" />
          ) : (
            ""
          )}
          <p className="text-3xl sm:text-5xl font-raleway font-light">
            {title}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center py-0">
        <div className="w-full px-5">
          <SearchBar />
        </div>
        <div className="bg-primary w-full flex-grow"></div>
      </div>

      <div className="bg-primary rounded-t-3xl flex items-center justify-center py-10">
        <div className="text-light-grey font-raleway flex flex-row gap-10 text-2xl font-light">
          <div>
            <p className="text-base px-20">{descriptionOne}</p>

            {descriptionTwo && (
              <p className="text-base px-20 py-5">{descriptionTwo}</p>
            )}

            {descriptionThree && (
              <p className="text-base px-20 py-5">{descriptionThree}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDescription;
