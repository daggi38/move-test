import { create } from "zustand";
import { VideoModel } from "../../../models/video/video";

type VideoStore = {
  videoList: VideoModel[];
  isLoading: boolean;
  isDataFetched: boolean;
  setVideoListAfterFetch: (data: VideoModel[]) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useVideoStore = create<VideoStore>((set) => ({
  videoList: [],

  isLoading: false,
  isDataFetched: false,

  setIsBusy: (busy: boolean) => {
    set(() => ({ isLoading: busy }));
  },

  setVideoListAfterFetch: (data: VideoModel[]) => {
    const sortedVideos = data.sort((a, b) => a.episode - b.episode);

    set(() => ({
      videoList: sortedVideos,
      isDataFetched: true,
    }));
  },
}));
