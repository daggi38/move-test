import { create } from "zustand";

type VimeoLinkStore = {
  vimeoLink: string;
  isBusy: boolean;
  isDataFetched: boolean;
  setVimeoLinkAfterFetch: (data: string) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useVimeoLinkStore = create<VimeoLinkStore>((set) => ({
  vimeoLink: "",

  isBusy: false,
  isDataFetched: false,

  setIsBusy: (busy: boolean) => {
    set(() => ({ isBusy: busy }));
  },

  setVimeoLinkAfterFetch: (data: string) => {
    set(() => ({
      vimeoLink: data,
      isDataFetched: true,
    }));
  },
}));
