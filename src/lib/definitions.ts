import { z } from "zod"

export const SignupFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Must be at least 2 characters long." })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: "Must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long." })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter e.g (A-Z)." })
    .regex(/[0-9]/, { message: "Contain at least one number e.g. (0-9)." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character e.g. (!@#$%^&*).",
    })
    .trim(),
})

export type SignUpFormState =
  | {
      errors?: {
        firstName?: string[]
        lastName?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
      success?: boolean
    }
  | undefined
