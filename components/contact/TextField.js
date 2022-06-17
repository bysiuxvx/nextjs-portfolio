import { Field, useField } from "formik"

import {
  Input,
  Textarea,
  FormLabel,
  FormErrorMessage,
  FormControl,
  useColorModeValue,
} from "@chakra-ui/react"

const TextField = ({ label, component, ...props }) => {
  const [field, meta] = useField(props)

  const bgc = useColorModeValue("#9ed8db4d", "#565659b3")
  const borderColor = useColorModeValue("#0606063b", "#f0e8e866")

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel pt={2}>{label}</FormLabel>
      <Field
        as={component === "input" ? Input : Textarea}
        {...field}
        {...props}
        style={{
          backgroundColor: bgc,
          borderColor: borderColor,
          borderWidth: 1,
        }}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  )
}

export default TextField
