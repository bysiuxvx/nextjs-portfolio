import * as yup from "yup"

export const yupValidation = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  message: yup
    .string()
    .trim()
    .min(10, "Too Short!")
    .required("Message is required"),
})
