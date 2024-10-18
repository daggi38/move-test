import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";
import {
  getSeriesEndpoint,
  getVideosEndpoint,
} from "../setup/axios-setup/endpoints";
import { useVideoStore } from "../setup/state-store/videos/store";

const useFetchVideos = (id: string) => {
  const {
    isBusy,
    isDataFetched,
    setIsBusy,
    setVideoListAfterFetch,
    videoList,
  } = useVideoStore();


  const hasVideos = videoList.length > 0;

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

  return { isBusy, videoList, isDataFetched, hasVideos };
};

export default useFetchVideos;
