import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";

import {  getVideosEndpoint,  } from "../setup/axios-setup/endpoints";
import { useEpisodeStore } from "../setup/state-store/episode/store";

const useFetchEpisode= (id: string) => {
  const {
isBusy,
isDataFetched,
setIsBusy,
episode,
setEpisodeAfterFetch
  } = useEpisodeStore();

  useEffect(() => {
    if (id) {
      fetchEpisode(id);
    }
  }, [id]);

  async function fetchEpisode(episodeId: string) {
    try {
      setIsBusy(true);
      const response = await instanceWithOutCredential.get(
        `${getVideosEndpoint}/${episodeId}`
      );

      setEpisodeAfterFetch(response.data.data);

     
    
    } catch (error) {
      console.error("Error fetching category:", error);
    } finally {
      setIsBusy(false);
    }
  }

  return { isBusy, episode,isDataFetched};
};

export default useFetchEpisode;
