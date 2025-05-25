import { z } from "zod";

export const SubmittedSchema = z.object({
  email: z.string().email({ message: "Valid email required" }),
});
