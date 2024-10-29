
export interface FeaturedCollection {
  id: string;
  title: string;
  description: string;
  position: string;
  category: FeaturedCollectionCategories[];
  images: Images[];
}

export interface FeaturedCollectionCategories {
  id: string;
  title: string;
  short_desc: string;
  page_title: string;
  page_sub_title: string;
  description: string;
}

export interface Images {
  id: string;
  path: string;
}
