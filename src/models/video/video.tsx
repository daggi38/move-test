import { Categories } from "../categories/categories";

export interface VideoModel {
  id: string;
  title: string;
  path: string;
  description: string;
  series_id:string;
  episode:string;
  video_id:string;
}
