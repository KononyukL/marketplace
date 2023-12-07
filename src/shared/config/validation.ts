export const enum ValidationMessage {
  REQUIRED = "auth.error-required",
  INVALID_EMAIL_FORMAT = "auth.error-email",
  INVALID_PASSWORD_FORMAT = "auth.error-password",
}

export const enum ValidationParam {
  MIN_LENGTH_EMAIL = 1,
  MIN_LENGTH_PASSWORD = 8,
}
