

import { useEffect } from "react";
import { useVimeoLinkStore } from "../setup/state-store/vimeo-store/store";

const useFetchVimeoLink = (token: string, id: string) => {
  const {
    isBusy,
    isDataFetched,
    setIsBusy,
    setVimeoLinkAfterFetch,
    vimeoLink,
  } = useVimeoLinkStore();

  useEffect(() => {
    if (id) {
      fetchVideoDetails(id);
    }
  }, [id]);

  async function fetchVideoDetails(videoPath: string) {
    try {
      setIsBusy(true);
      const response = await fetch(`https://api.vimeo.com${videoPath}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch video link");
      }

      const data = await response.json();
      setVimeoLinkAfterFetch(data.player_embed_url);
    } catch (error) {
      console.error("Error fetching video link:", error);
    } finally {
      setIsBusy(false);
    }
  }

  return { isBusy, vimeoLink, isDataFetched };
};

export default useFetchVimeoLink;
