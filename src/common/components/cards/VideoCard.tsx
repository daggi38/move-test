import React from "react";
import { FiShare2, FiPlay } from "react-icons/fi";

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
    <div className="relative w-full bg-primary rounded-lg shadow-md overflow-hidden">
      <div className="relative cursor-pointer" onClick={onClick}>
        <img
          src={image}
          alt={title}
          className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] object-cover rounded-t-lg"
        />
        {isVideoDisplayed ? (
          <div className="absolute inset-0 bg-black opacity-80 rounded-t-lg flex items-center justify-center">
            <p className="text-3xl text-light-yellow">Playing</p>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black rounded-full flex items-center justify-center">
              <FiPlay className="text-white text-5xl  p-3" fill="white" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-light-yellow font-Montserrat font-light text-xl sm:text-2xl ">
            {title}
          </p>
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-light-grey font-raleway text-sm sm:text-base font-light">
            <p>
              <span>Episode </span>
              <span>{episode}</span>
            </p>
            <p>
              {/* <span>Views </span>
              <span>{views}</span> */}
            </p>
          </div>
        </div>
        <p
          className="font-light text-sm sm:text-base text-light-grey mt-2 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <div className="flex items-end justify-end mt-4">
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
