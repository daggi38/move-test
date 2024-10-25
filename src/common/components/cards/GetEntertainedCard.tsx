import React from "react";

interface GetEntertainedCard {
  imageUrl: string;
  title: string;
  onClick: () => void;
}

const GetEntertainedCard: React.FC<GetEntertainedCard> = ({
  imageUrl,
  title,
  onClick
}) => {
  return (
    <div
      className="relative  w-full md:w-[438px] h-full bg-cover bg-center rounded-3xl cursor-pointer"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={onClick}
    >
   
      <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

   
      <div className="relative z-10 flex items-end justify-center h-full">
        <p className="text-4xl text-light-grey font-raleway pb-5">
          {title}
        </p>
      </div>
    </div>
  );
};

export default GetEntertainedCard;
