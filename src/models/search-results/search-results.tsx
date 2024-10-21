export interface SearchResult {
    id:          string;
    title:       string;
    description: string;
    short_desc:  string;
    category_id: string;
    created_at:  Date;
    updated_at:  Date;
    series:      Series[];
  }
  
  export interface Series {
    id:              string;
    sub_category_id: string;
    title:           string;
    description:     string;
    // created_at:      Date | null;
    // updated_at:      Date | null;
    videos:          Video[];
  }
  
  export interface Video {
    id:              string;
    sub_category_id: string;
    title:           string;
    description:     string;
    path:            string;
    series_id:       string;
    episode:         number;
    // video_id:        null;
    // created_at:      Date;
    // updated_at:      Date;
  }