import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";

import type { IBlog } from "./types";

class BlogActions {
  async getBlog(langCode: string = "ua") {
    const result = await axiosInstance.get<IBlog>(
      paths.blog.get_all + langCode,
    );
    return result.data;
  }
}

const BlogService = new BlogActions();
export default BlogService;
