import VideoCard from "../../../../common/components/cards/VideoCard";
import LiveArt from "../../../../assets/images/live-art.jpg";

const PerformancesSection = () => {
  return (
    <div className="h-[100vh] flex flex-col p-20">
      <p className="text-light-yellow text-5xl font-light font-Montserrat">
        Performances
      </p>

      <div className="flex gap-5 m-10">
       
          <VideoCard
          description=" Artists create paintings in front of an audience, showcasing their
          creative process from start to finish. This can include canvas
          painting, mural creation, or graffiti art."
          image={LiveArt}
          title="  Live Painting"
          views={250}
        />
          <VideoCard
          description=" Artists create paintings in front of an audience, showcasing their
          creative process from start to finish. This can include canvas
          painting, mural creation, or graffiti art."
          image={LiveArt}
          title="  Live Painting"
          views={250}
        />
      </div>
    </div>
  );
};

export default PerformancesSection;

