export const paths = {
  auth: {
    login: "/v1/auth/login",
    register: "/v1/auth/register",
    refresh: "/v1/auth/refresh",
  },
  languages: {
    get_all: "/v1/languages",
  },
  categories: {
    get_all: "/v1/categories/favorite/",
  },
  categoriesAll: {
    get_all: "/v1/categories/",
  },
  categoriesFavoriteTags: {
    get_all: "/v1/categories/favorite-tags/",
  },
  blog: {
    get_all: "/v1/blog/",
  },
  advertisementsFavorite: {
    get_all: "/v1/advertisements/favorite/",
  },
  locations: {
    get_city_by_name: "/v1/cities/byName/",
  },
} as const;
