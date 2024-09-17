import { Key, SetStateAction, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import VideoCard from "../../../../common/components/cards/VideoCard";

type ItemsSectionProps = {
  title: string;
  menuItems: string[];
};

const ItemsSection: React.FC<ItemsSectionProps> = ({ title, menuItems }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("All");

  useEffect(() => {
    setCurrentPage(0);
  }, [activeItem]);

  const handleItemClick = (item: SetStateAction<string>) => {
    setActiveItem(item);
  };

  const handleCardClick = (item: any) => {
    navigate("/property", { state: item });
  };

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20  md:mt-20">
      <div className="flex justify-start text-left md:text-center">
        <div>
          <p className="text-light-yellow text-5xl font-light font-Montserrat">
            {title}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-5 mt-5">
        {menuItems.map((item) => (
          <p
            key={item}
            className={`px-4 sm:px-6 md:px-10 cursor-pointer py-2 rounded-3xl  text-lg sm:text-xl bg-primary text-light-grey ${
              activeItem === item ? "border border-light-yellow" : ""
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <VideoCard
            description="."
            title=""
            image={""}
            views={150}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemsSection;
