import React from 'react';
import { FiShare2 } from "react-icons/fi";

interface VideoCardProps {
  title: string;
  views: number;
  description: string;
  image: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, views, description, image }) => {
  return (
    <div className=" w-full md:w-[400px] h-[394px] bg-primary rounded-lg">
      <div>
        <img src={image} alt={title} className="h-[200px] w-full rounded-lg object-cover" />
      </div>
      <div className="px-5">
        <div className="flex justify-between mt-2">
          <p className="text-light-yellow font-Montserrat font-light text-2xl">
            {title}
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
          <FiShare2 className="text-white" size={25} />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;