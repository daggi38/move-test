import { create } from "zustand";
import { Categories, SubCategory } from "../../../models/categories/categories";
import { VideoModel } from "../../../models/video/video";

type VideoStore = {
  videoList: VideoModel[];

  isBusy: boolean;
  isDataFetched: boolean;
  setVideoListAfterFetch: (data: VideoModel[]) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useVideoStore = create<VideoStore>((set) => ({
  videoList: [],

  isBusy: false,
  isDataFetched: false,

  setIsBusy: (busy: boolean) => {
    set(() => ({ isBusy: busy }));
  },

  setVideoListAfterFetch: (data: VideoModel[]) => {
    set(() => ({
      videoList: data,

      isDataFetched: true,
    }));
  },
}));
