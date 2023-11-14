export const enum ValidationMessage {
  REQUIRED = "Це поле є обов'язковим",
  INVALID_EMAIL_FORMAT = "Неправильний формат електронної адреси",
  INVALID_PASSWORD_FORMAT = "Неправильний формат паролю",
}

export const enum ValidationParam {
  MIN_LENGTH_EMAIL = 1,
  MIN_LENGTH_PASSWORD = 8,
}
