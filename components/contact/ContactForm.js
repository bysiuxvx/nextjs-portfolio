// import { useState } from "react"

import { Formik, Field } from "formik"

import { yupValidation } from "../../lib/yup-validation"

import TextField from "./TextField"

import { Box, Button } from "@chakra-ui/react"

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={yupValidation}
      onSubmit={(values, actions) => {
        // setMessage("Form submitted")
        // setSubmitted(true)

        // alert(JSON.stringify(values, null, 2))
        alert(
          "As you are trying out if this contact form actually works, I am working in real time in making it happen 😂"
        )
        actions.resetForm()
      }}
    >
      {(formik) => (
        <Box as="form" onSubmit={formik.handleSubmit}>
          <TextField
            type="input"
            name="name"
            label="Your name"
            placeholder="Enter your name"
          />
          <TextField
            type="input"
            name="email"
            label="Your email"
            placeholder="Enter your email"
          />
          <TextField
            type="textarea"
            name="message"
            label="Your message"
            placeholder="Enter your message"
          />
          <Button type="submit">Submit</Button>
        </Box>
      )}
    </Formik>
  )
}

export default ContactForm
