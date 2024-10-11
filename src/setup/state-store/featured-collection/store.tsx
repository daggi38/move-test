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

export const useFeaturedCollectionStore = create<FeaturedCollectionStore>((set) => ({
  featuredCollection: [],
  fitnessFeature: {
    id: "",
    title: "",
    description: "",
    position: "",
    category: [],  
  },
  entertainmentFeature: {
    id: "",
    title: "",
    description: "",
    position: "",
    category: [],  
  },

  isBusy: false,
  isDataFetched: false,

  setIsBusy: (busy: boolean) => {
    set(() => ({ isBusy: busy }));
  },

  setFeaturedCollection: (data: FeaturedCollection[]) => {

    const fitnessFeature = data.find((item) => item.title === "Fitness Program") || {
      id: "",
      title: "",
      description: "",
      position: "",
      category: [],  
    };

    const entertainmentFeature = data.find((item) => item.title === "Get Entertained") || {
      id: "",
      title: "",
      description: "",
      position: "",
      category: [],  
    };

    set(() => ({
      featuredCollection: data,
      fitnessFeature,
      entertainmentFeature,
      isDataFetched: true,
    }));
  },
}));
