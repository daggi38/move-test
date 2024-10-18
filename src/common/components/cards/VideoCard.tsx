import React from "react";
import { FiShare2 } from "react-icons/fi";

interface VideoCardProps {
  episode: string;
  title: string;
  views: number;
  description: string;
  image: string;
  onClick: () => void;
  isVideoDisplayed?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({
  episode,
  title,
  views,
  description,
  image,
  onClick,
  isVideoDisplayed = false,
}) => {
  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: description,
          url: window.location.href,
        })
        .then(() => console.log("Video shared successfully!"))
        .catch((error) => console.error("Error sharing video:", error));
    } else {
      alert("Web Share API is not supported in this browser.");
    }
  };

  return (
    <div
      className={`relative w-full md:w-[400px] h-[394px] bg-primary rounded-lg `}
    >
      <div className="relative cursor-pointer" onClick={onClick}>
        <img
          src={image}
          alt={title}
          className="h-[200px] w-full rounded-lg object-cover"
        />
        {isVideoDisplayed && (
          <div className="absolute inset-0 bg-light-yellow opacity-20 rounded-t-lg flex items-center justify-center"></div>
        )}
      </div>

      <div className="px-5">
        <div className="flex justify-between mt-2">
          <p className="text-light-yellow font-Montserrat font-light text-2xl">
            {title}
          </p>
          <p className="text-light-grey text-base font-raleway font-light">
            <span>Episode </span>
            <span>{episode}</span>
          </p>
          <p className="text-light-grey text-base font-raleway font-light">
            <span>Views </span>
            <span>{views}</span>
          </p>
        </div>
        <p className="font-light text-base text-light-grey mt-2">
          {description}
        </p>
        <div className="flex items-end justify-end">
          <FiShare2
            className="text-white cursor-pointer"
            size={25}
            onClick={handleShareClick}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
