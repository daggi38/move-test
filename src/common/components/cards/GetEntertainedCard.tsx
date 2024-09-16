import React from "react";

interface GetEntertainedCard {
  imageUrl: string;
  title: string;
}

const GetEntertainedCard: React.FC<GetEntertainedCard> = ({
  imageUrl,
  title,
}) => {
  return (
    <div
      className="relative w-[438px] h-full bg-cover bg-center rounded-3xl"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Title */}
      <div className="relative z-10 flex items-end justify-center h-full">
        <p className="text-4xl text-light-grey font-raleway pb-5">
          {title}
        </p>
      </div>
    </div>
  );
};

export default GetEntertainedCard;
