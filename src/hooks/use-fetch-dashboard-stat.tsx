import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";

import {  getDashboardStatEndpoint } from "../setup/axios-setup/endpoints";
import { useDashboardStatStore } from "../setup/state-store/dashboard-stat/store";

const useFetchDashboardStats = () => {
  const {
   
    dashboardStat,
    isBusy,
    setDashBoardstat,

    setIsBusy,
    isDataFetched,
  } = useDashboardStatStore();

  useEffect(() => {
    if (!isDataFetched) {
      FetchDashboardStats();
    }
  }, [isDataFetched]);

  async function FetchDashboardStats() {
    try {
      setIsBusy(true);
      const response = await instanceWithOutCredential.get(
        getDashboardStatEndpoint,
        {}
      );

      setDashBoardstat(response.data);
    } catch (error) {
    } finally {
      setIsBusy(false);
    }
  }

  return { dashboardStat, isBusy };
};

export default useFetchDashboardStats;
