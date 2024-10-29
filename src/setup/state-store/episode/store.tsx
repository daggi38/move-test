import { create } from "zustand";
import { VideoModel } from "../../../models/video/video";

type EpisodeStore = {
  episode: VideoModel;

  isBusy: boolean;
  isDataFetched: boolean;
  setEpisodeAfterFetch: (data: VideoModel) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useEpisodeStore = create<EpisodeStore>((set) => ({
  episode: {
    id: "",
    title: "",
    path: "",
    description: "",
    series_id: "",
    episode: 0,
    video_id: "",
    images: [],
  },

  isBusy: false,
  isDataFetched: false,

  setIsBusy: (busy: boolean) => {
    set(() => ({ isBusy: busy }));
  },

  setEpisodeAfterFetch: (data: VideoModel) => {
    set(() => ({
      episode: data,

      isDataFetched: true,
    }));
  },
}));
