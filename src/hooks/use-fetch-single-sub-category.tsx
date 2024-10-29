import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";

import { getSubCategoriesEndpint } from "../setup/axios-setup/endpoints";
import {  useSubCategoryStore } from "../setup/state-store/sub-category/single-sub-category";

const useFetchSubCategories = (id: string) => {
  const {
    tagItems,
    series,
    isDataFetched,
    setSeriesAfterFetch,
    isBusy,

    setIsBusy,
 setSubCategoryAfterFetch,
 subCategory
  } = useSubCategoryStore();

  useEffect(() => {
    if (id) {
      fetchSubCategory(id);
    }
  }, [id]);

  async function fetchSubCategory(subCategoryId: string) {
    try {
      setIsBusy(true);
      const response = await instanceWithOutCredential.get(
        `${getSubCategoriesEndpint}/${subCategoryId}`
      );

      setSubCategoryAfterFetch(response.data.data);

      setSeriesAfterFetch(response.data.series);

    } catch (error) {
      console.error("Error fetching category:", error);
    } finally {
      setIsBusy(false);
    }
  }

  return { isBusy, subCategory ,series ,isDataFetched,tagItems};
};

export default useFetchSubCategories;
