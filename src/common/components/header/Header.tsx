import  { useState } from "react";
import { Link } from "react-router-dom";
import { entertainmentLink, fitnessLink } from "../../app-strings";
import MoveItText from "../../helper/TitleHelper";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="py-5 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="flex items-center justify-between lg:justify-start lg:relative">
        <div className="lg:absolute lg:left-0">
          <Link to="/">
            <MoveItText className="text-3xl sm:text-4xl font-Montserrat" />
          </Link>
        </div>

        <div className="hidden md:flex lg:flex-grow lg:justify-center">
          <div className="text-light-grey font-raleway text-xl lg:text-2xl flex gap-6 lg:gap-10 font-light">
            <Link to="/catagory">{fitnessLink}</Link>
            <Link to="/catagory">{entertainmentLink}</Link>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-light-grey focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="text-light-grey font-raleway text-xl flex flex-col gap-4 font-light">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              {fitnessLink}
            </Link>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              {entertainmentLink}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;