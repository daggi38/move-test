import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";

import { useFeaturedCollectionStore } from "../setup/state-store/featured-collection/store";
import { getFeaturedCollectionEndpoint } from "../setup/axios-setup/endpoints";

const UseFetchFeaturedCollection = () => {
  const {
    featuredCollection,
    isBusy,
    setFeaturedCollection,
    setIsBusy,
    isDataFetched,
  } = useFeaturedCollectionStore();

  useEffect(() => {
    if (!isDataFetched) {
      fetchCategories();
    }
  }, [isDataFetched]);

  async function fetchCategories() {
    try {
      setIsBusy(true);
      const response = await instanceWithOutCredential.get(
        getFeaturedCollectionEndpoint,
        {}
      );

      setFeaturedCollection(response.data.data);
    } catch (error) {
    } finally {
      setIsBusy(false);
    }
  }

  return { isBusy, featuredCollection };
};

export default UseFetchFeaturedCollection;
