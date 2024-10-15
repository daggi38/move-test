import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";

import { getSeriesEndpoint,  } from "../setup/axios-setup/endpoints";
import { useSIngleSeriesStore } from "../setup/state-store/single-series/store";

const useFetchSingleSeries= (id: string) => {
  const {
isBusy,
isDataFetched,
setIsBusy,
setSingleSeriesAfterFetch,
singleSeries,
  } = useSIngleSeriesStore();

  useEffect(() => {
    if (id) {
      fetchSingleSeries(id);
    }
  }, [id]);

  async function fetchSingleSeries(seriesId: string) {
    try {
      setIsBusy(true);
      const response = await instanceWithOutCredential.get(
        `${getSeriesEndpoint}/${seriesId}`
      );

      setSingleSeriesAfterFetch(response.data.data);

     
     // setSeriesAfterFetch(response.data.series);
    } catch (error) {
      console.error("Error fetching category:", error);
    } finally {
      setIsBusy(false);
    }
  }

  return { isBusy, singleSeries,isDataFetched};
};

export default useFetchSingleSeries;
