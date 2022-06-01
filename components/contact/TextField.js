import { Field, useField } from "formik"

import {
  Input,
  Textarea,
  FormLabel,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react"

const TextField = ({ label, component, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel pt={2}>{label}</FormLabel>
      <Field
        as={component === "input" ? Input : Textarea}
        {...field}
        {...props}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  )
}

export default TextField
