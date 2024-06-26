import * as z from "zod";

// export const emailValidationSchema = z.object({
//   email: z.string().email({ message: "Invalid email" }),
// });

export const signinValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type SigninValidationSchema = z.infer<typeof signinValidationSchema>;
// export type EmailValidationSchema = z.infer<typeof emailValidationSchema>;
