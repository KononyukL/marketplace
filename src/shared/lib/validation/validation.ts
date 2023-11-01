import { z } from "zod";

export const addValidationLoginSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Це поле є обов'язковим" })
      .email("Неправильний формат електронної адреси"),
    password: z
      .string()
      .min(1, { message: "Це поле є обов'язковим" })
      .regex(
        new RegExp("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})"),
        "Неправильний формат паролю",
      ),
    rememberMe: z.boolean(),
  })
  .required();

export const addValidationRegistrationSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Це поле є обов'язковим" })
      .email("Неправильний формат електронної адреси"),
    password: z
      .string()
      .min(1, { message: "Це поле є обов'язковим" })
      .regex(
        new RegExp("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})"),
        "Неправильний формат паролю",
      ),
  })
  .required({ email: true, password: true });
