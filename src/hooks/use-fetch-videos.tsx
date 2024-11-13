import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";
import {
  getSeriesEndpoint,
  getVideosEndpoint,
} from "../setup/axios-setup/endpoints";
import { useVideoStore } from "../setup/state-store/videos/store";

const useFetchVideos = (id: string) => {
  const {
    isLoading,
    isDataFetched,
    setIsBusy,
    setVideoListAfterFetch,
    videoList,
  } = useVideoStore();


  

  useEffect(() => {
    if (id) {
      fetchVideos(id);
    }
  }, [id]);

  async function fetchVideos(seriesId: string) {
    try {
      setIsBusy(true);
      const response = await instanceWithOutCredential.get(
        `${getSeriesEndpoint}/${seriesId}/${getVideosEndpoint}`
      );

      setVideoListAfterFetch(response.data.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setIsBusy(false);
    }
  }
  const hasVideos = Array.isArray(videoList) && videoList.length > 0;


  return { isLoading, videoList, isDataFetched, hasVideos };
};

export default useFetchVideos;
