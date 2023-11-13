import { z } from "zod";
import Auth from "@/shared/lib/validation/enums";

export const addValidationLoginSchema = z
  .object({
    email: z
      .string()
      .min(Auth.MIN_LENGTH_EMAIL, { message: `${Auth.REQUIRED_MESSAGE}` })
      .email(Auth.INVALID_MESSAGE_EMAIL),
    password: z
      .string()
      .min(Auth.MIN_LENGTH_PASSWORD, { message: `${Auth.REQUIRED_MESSAGE}` })
      .regex(
        new RegExp("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})"),
        Auth.INVALID_MESSAGE_PASSWORD,
      ),
    rememberMe: z.boolean(),
  })
  .required();

export const addValidationRegistrationSchema = z
  .object({
    email: z
      .string()
      .min(Auth.MIN_LENGTH_EMAIL, { message: `${Auth.REQUIRED_MESSAGE}` })
      .email(Auth.INVALID_MESSAGE_EMAIL),
    password: z
      .string()
      .min(Auth.MIN_LENGTH_PASSWORD, { message: `${Auth.REQUIRED_MESSAGE}` })
      .regex(
        new RegExp("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})"),
        Auth.INVALID_MESSAGE_PASSWORD,
      ),
  })
  .required({ email: true, password: true });
