import { create } from "zustand";
import { FeaturedCollection } from "../../../models/featured-collection/featured-collection";

type FeaturedCollectionStore = {
  featuredCollection: FeaturedCollection[];
 
  isBusy: boolean;
  isDataFetched: boolean;
  setFeaturedCollection: (data: FeaturedCollection[]) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useFeaturedCollectionStore = create<FeaturedCollectionStore>((set) => ({
 featuredCollection:[],

  isBusy: false,
  isDataFetched: false,

  setIsBusy: (busy: boolean) => {
    set(() => ({ isBusy: busy }));
  },

  setFeaturedCollection: (data: FeaturedCollection[]) => {


    set(() => ({
      featuredCollection: data,
     
      isDataFetched: true,
    }));
  },
}));