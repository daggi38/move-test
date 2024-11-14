import { create } from "zustand";
import { FeaturedCollection } from "../../../models/featured-collection/featured-collection";

type FeaturedCollectionStore = {
  featuredCollection: FeaturedCollection[];
  fitnessFeature: FeaturedCollection;
  entertainmentFeature: FeaturedCollection;
  isBusy: boolean;
  isDataFetched: boolean;
  setFeaturedCollection: (data: FeaturedCollection[]) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useFeaturedCollectionStore = create<FeaturedCollectionStore>(
  (set) => ({
    featuredCollection: [],
    fitnessFeature: {
      id: "",
      title: "",
      description: "",
      position: "",
      category: [],
      images: [],
    },
    entertainmentFeature: {
      id: "",
      title: "",
      description: "",
      position: "",
      category: [],
      images: [],
    },

    isBusy: false,
    isDataFetched: false,

    setIsBusy: (busy: boolean) => {
      set(() => ({ isBusy: busy }));
    },

    setFeaturedCollection: (data: FeaturedCollection[]) => {
      const fitnessFeature = data.find((item) =>
        item.title.toLowerCase().includes("fitness")
      ) || {
        id: "",
        title: "",
        description: "",
        position: "",
        category: [],
        images: [],
      };

      const entertainmentFeature = data.find((item) =>
        item.title.toLowerCase().includes("entertainment")
      ) || {
        id: "",
        title: "",
        description: "",
        position: "",
        category: [],
        images: [],
      };

      set(() => ({
        featuredCollection: data,
        fitnessFeature,
        entertainmentFeature,
        isDataFetched: true,
      }));
    },
  })
);
