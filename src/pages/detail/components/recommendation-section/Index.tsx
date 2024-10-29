import React, { Key, useState } from "react";
import VideoCard from "../../../../common/components/cards/VideoCard";
import { VideoModel } from "../../../../models/video/video";
import useFetchVideos from "../../../../hooks/use-fetch-videos";
import { useNavigate, useParams } from "react-router";
import ShimmerIndicator from "../../../../common/components/shimmer-indicator/ShimmerIndicator";
import ReactPaginate from "react-paginate";

interface EpisodeProps {
  episode: VideoModel;
  isLoading: boolean;
}

const RecommendationSection: React.FC<EpisodeProps> = ({
  episode,
 
}) => {
  const { videoList, hasVideos, isBusy } = useFetchVideos(episode.series_id);
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(videoList.length / itemsPerPage);

  const currentItems = videoList.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleCardClick = (videoId: Key | null | undefined) => {
    if (id === videoId) {
      return;
    }
    navigate(`/detail/${videoId}`);
  };

  const videos = currentItems.map((video: VideoModel) => (
    <VideoCard
      episode={video.episode.toString()}
      key={video.id}
      title={video.title}
      description={video.description}
      image={video.images[0]?.path || ""}
      views={0}
      onClick={() => handleCardClick(video.id)}
      isVideoDisplayed={id === video.id}
    />
  ));

  return (
    <div className="px-5 md:px-20">
      <p className="font-Montserrat text-3xl md:text-6xl text-light-yellow pb-10">
        {"Episodes"}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10">
        {isBusy ? (
          <>
            <ShimmerIndicator count={1} height={400} width={400} />
            <ShimmerIndicator count={1} height={400} width={400} />
          </>
        ) : (
          hasVideos && videos
        )}
      </div>

      <ReactPaginate
        className="text-light-yellow flex flex-row gap-5 text-center items-center justify-center pt-10 mb-5"
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageClassName="page"
        activeClassName="active"
        previousClassName="prev"
        nextClassName="next"
        breakClassName="break"
        disabledClassName="disabled"
      />
    </div>
  );
};

export default RecommendationSection;
