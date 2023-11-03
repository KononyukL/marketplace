import { z } from "zod";

export const addValidationLoginSchema = z
  .object({
    email: z
      .string()
      .email("Неправильний формат електронної адреси")
      .min(1, { message: "Це поле є обов'язковим" }),
    password: z
      .string()
      .regex(
        new RegExp("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})"),
        "Неправильний формат паролю",
      )
      .min(1, { message: "Це поле є обов'язковим" }),
    rememberMe: z.boolean(),
  })
  .required();

export const addValidationRegistrationSchema = z
  .object({
    email: z
      .string()
      .email("Неправильний формат електронної адреси")
      .min(1, { message: "Це поле є обов'язковим" }),
    password: z
      .string()
      .regex(
        new RegExp("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})"),
        "Неправильний формат паролю",
      )
      .min(1, { message: "Це поле є обов'язковим" }),
  })
  .required({ email: true, password: true });
