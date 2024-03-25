import { z } from "zod";
import { ValidationParam } from "@/shared/config";

export const searchSchema = z.object({
  searchTerm: z.string().min(ValidationParam.MIN_LENGTH_EMAIL),
});
