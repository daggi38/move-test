export interface Categories {
  id: string;
  title: string;
  short_desc: string;
  page_title: string;
  page_sub_title: string;
  description: string;
  sub_categories: SubCategory[];  
}

export interface SubCategory {
  id: string;
  title: string;
  description: string;
  short_desc?: string;
  category_id: string;
}
