import { z } from "zod";

export const addValidationLoginSchema = z
  .object({
    email: z.string().min(2, { message: "Це поле є обов'язковим" }),
    password: z.string().min(1, { message: "Це поле є обов'язковим" }),
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
