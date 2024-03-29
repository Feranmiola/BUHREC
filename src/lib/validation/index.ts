import * as z  from "zod"


export const SignupValidationSchema = z.object({
    firstName: z.string().min(2, {message : "too short" }),
    lastName: z.string().min(2, {message : "too short" }),
    email: z.string().email(),
    phone: z.string(),
    sex: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    prefix: z.string(),
    suffix: z.string(),
    preferrdRole: z.string(),
    studyLevel: z.string(),
    program: z.string(),
    discipline: z.string(),
    password: z.string().min(8, {message : "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(8, {message : "Password must be at least 8 characters" }),

  })

  export const SigninValidationSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })
