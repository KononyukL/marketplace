export const CONFIG_APP = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "",
};

export const SESSION_CONFIG = {
  EXPIRATION_OFFSET: 15 * 1000, // the offset before the expiration of the token for the outcoming request to consider the token invalid (milliseconds)
};
