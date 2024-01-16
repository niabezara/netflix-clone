import * as z from "zod";

export const emailValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
});

export type EmailValidationSchema = z.infer<typeof emailValidationSchema>;
