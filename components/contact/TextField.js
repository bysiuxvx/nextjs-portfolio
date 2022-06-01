import { Field, useField } from "formik"

import {
  Input,
  Textarea,
  FormLabel,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react"

const TextField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Field as={type === "input" ? Input : Textarea} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  )
}

export default TextField
