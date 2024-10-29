export interface Categories {
  id: string;
  title: string;
  short_desc: string;
  page_title: string;
  page_sub_title: string;
  description: string;
  sub_categories: SubCategory[];
  images:Images[]
}

export interface SubCategory {
  id: string;
  title: string;
  description: string;
  short_desc: string;
  category_id: string;
  images: Images[];
}

export interface Images {
  id: string;
  path: string;
}

export interface Series {
  id: string;
  title: string;
  description: string;
  tags:tags[]
  images:Images[]
}

export interface tags {
  id: string;
  title: string;
 
}
