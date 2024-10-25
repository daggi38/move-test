import { instanceWithOutCredential } from "../setup/axios-setup/endpoint-setup";
import { useEffect } from "react";
import { useFeaturedCollectionStore } from "../setup/state-store/featured-collection/store";
import { getFeaturedCollectionEndpoint } from "../setup/axios-setup/endpoints";

const useFetchFeaturedCollection = () => {
  const {
    entertainmentFeature,
    fitnessFeature,
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

  

  const hasFeaturedCollection = featuredCollection.length >0;
 

  return {
    isBusy,
    featuredCollection,
    fitnessFeature,
    entertainmentFeature,
    isDataFetched,
    hasFeaturedCollection,
  };
};

export default useFetchFeaturedCollection;
