import { type SORT_OPTIONS } from "@/shared/queries/search/types";

export type Sort = {
  title: string;
  value: SORT_OPTIONS;
}[];
