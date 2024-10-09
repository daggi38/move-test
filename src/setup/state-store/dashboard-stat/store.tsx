import { create } from "zustand";
import { FeaturedCollection } from "../../../models/featured-collection/featured-collection";
import { DashboardStats } from "../../../models/dashboard-stats/dashboard-stats";

type DashboardStat = {
  dashboardStat: DashboardStats[];
  

  isBusy: boolean;
  isDataFetched: boolean;
  setDashBoardstat: (data: DashboardStats[]) => void;
  setIsBusy: (busy: boolean) => void;
};

export const useDashboardStatStore = create<DashboardStat>((set) => ({
  
  dashboardStat: [],

  isBusy: false,
  isDataFetched: false,

  setIsBusy: (busy: boolean) => {
    set(() => ({ isBusy: busy }));
  },



  setDashBoardstat: (data: DashboardStats[]) => {


    set(() => ({
      dashboardStat: data,
     
      isDataFetched: true,
    }));
  },
  
}));
