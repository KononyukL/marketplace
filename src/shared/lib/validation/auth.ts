import { ValidationMessage, ValidationParam } from "@/shared/config";
import { z } from "zod";

export const registrationSchema = z
  .object({
    email: z
      .string()
      .min(ValidationParam.MIN_LENGTH_EMAIL, {
        message: `${ValidationMessage.REQUIRED}`,
      })
      .email(ValidationMessage.INVALID_EMAIL_FORMAT),
    password: z
      .string()
      .min(ValidationParam.MIN_LENGTH_PASSWORD, {
        message: `${ValidationMessage.REQUIRED}`,
      })
      .regex(
        new RegExp("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})"),
        ValidationMessage.INVALID_PASSWORD_FORMAT,
      ),
  })
  .required({ email: true, password: true });

export const loginSchema = registrationSchema.extend({
  rememberMe: z.boolean(),
});
