export const CONFIG_APP = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "",
};

const EXPIRATION_TIME = 15 * 60 * 1000;
export const SESSION_CONFIG = {
  EXPIRATION_OFFSET: EXPIRATION_TIME, // the offset before the expiration of the token for the outcoming request to consider the token invalid (milliseconds)
};
