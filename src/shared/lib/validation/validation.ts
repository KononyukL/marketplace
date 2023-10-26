import { z } from "zod";

export const addValidationLoginSchema = z
  .object({
    email: z
      .string()
      .regex(
        new RegExp("^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$"),
        "Неправильний формат електронної адреси",
      )
      .min(1, { message: "Це поле є обов'язковим" }),
    password: z
      .string()
      .regex(
        new RegExp("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})"),
        "Неправильний формат паролю",
      )
      .min(1, { message: "Це поле є обов'язковим" }),
  })
  .required();

export const addValidationRegistrationSchema = z
  .object({
    email: z.string().email().min(1, { message: "Це поле є обов'язковим" }),
    password: z.string().min(1, { message: "Це поле є обов'язковим" }),
    confirmPassword: z.string().min(1, { message: "Це поле є обов'язковим" }),
  })
  .required({ email: true, password: true })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадають",
    path: ["confirmPassword"],
  });
