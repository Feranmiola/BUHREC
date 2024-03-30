import * as z  from "zod"


export const SignupValidationSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
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
    password: z.string(),
    confirmPassword: z.string(),

  })

  export const SigninValidationSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  
  export const ChangePasswprdSchema = z.object({
    oldpassword: z.string(),
    nwqpassword: z.string(),
    confirmnwqpassword: z.string(),
  })

  export const ChangeAccountInformtionSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    prefix: z.string(),
    suffix: z.string(),
    studyLevel: z.string(),
    program: z.string(),
    discipline: z.string(),
  })
