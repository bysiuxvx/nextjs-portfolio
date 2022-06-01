import { Formik, Field } from "formik"
import { yupValidation } from "../../lib/yup-validation"

import axios from "axios"

import TextField from "./TextField"

import { Box, Button } from "@chakra-ui/react"

const ContactForm = () => {
  const handleOnSubmit = (values, actions) => {
    const url = process.env.POST_URL

    axios({
      method: "post",
      url: url,
      data: {
        name: values.name,
        email: values.email,
        message: values.message,
      },
    })
      .then((res) => {
        actions.resetForm()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={yupValidation}
      onSubmit={handleOnSubmit}
    >
      {(formik) => (
        <Box as="form" onSubmit={formik.handleSubmit}>
          <TextField
            name="name"
            type="name"
            component="input"
            label="Your name"
            placeholder="Enter your name"
          />
          <TextField
            name="email"
            type="email"
            component="input"
            label="Your email"
            placeholder="Enter your email"
          />
          <TextField
            name="message"
            type="message"
            component="textarea"
            label="Your message"
            placeholder="Enter your message"
          />
          <Button type="submit" isLoading={formik.isSubmitting}>
            Submit
          </Button>
        </Box>
      )}
    </Formik>
  )
}

export default ContactForm
