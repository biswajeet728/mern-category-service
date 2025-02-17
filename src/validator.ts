import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3)
    .max(255),
  isVisible: z.boolean().default(true),
});
