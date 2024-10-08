import { Link } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { RiArrowRightWideFill } from "react-icons/ri";
import useFetchCategories from "../../../hooks/use-fetch-categories";

const Footer = () => {
  const { categories } = useFetchCategories();

 
  const categoryLinks = categories?.map((category) => (
    <Link
      key={category.id}
      to="/category"
      state={{ id: category.id }}
      onClick={() => {}}
    >
      {category.title}
    </Link>
  ));

  return (
    <div className="bg-primary px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between pt-8 gap-8">
        <div className="font-bold text-3xl sm:text-4xl text-center md:text-left">
          <span className="text-light-yellow">Move</span>
          <span className="text-light-grey">It</span>
        </div>
        <div className="text-light-grey font-raleway text-xl lg:text-2xl flex gap-6 lg:gap-10 font-light">
          {categoryLinks}
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-5 text-white">
            <AiFillTwitterCircle size={32} />
            <FaFacebook size={30} />
            <FaPhoneAlt size={28} />
          </div>
          <div className="flex text-white items-center">
            <MdLocationPin size={32} />
            <p className="text-light-grey font-light text-sm sm:text-base text-center md:text-right">
              879 W. 190th St. Suite 400, <br /> Gardena, CA 90248 USA
            </p>
          </div>
        </div>
      </div>
      
      <hr className="h-px my-8 w-full bg-gray-200 border-0 dark:bg-gray-700" />
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <p className="font-raleway font-light text-light-grey text-2xl sm:text-3xl">
          Subscribe
        </p>
        <div className="flex w-full sm:w-auto">
          <input
            placeholder="Your Email"
            type="text"
            className="bg-primary-light h-[50px] rounded-l-lg placeholder:text-light-grey placeholder:px-3 w-full sm:w-[200px] md:w-[300px]"
          />
          <div className="bg-light-yellow h-[50px] w-[70px] rounded-r-lg flex items-center justify-center">
            <RiArrowRightWideFill className="text-white" size={30} />
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center mt-10 pb-8">
        <p className="text-light-grey text-sm sm:text-base md:text-xl font-light text-center">
          <span>MoveIt. Copyright @ </span>
          <span>{new Date().getFullYear()} </span>
          <span>Powered By </span>
          <span className="font-bold">VP Solutions</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
