import { Formik } from "formik";
import { yupValidation } from "../../lib/yup-validation";

import axios from "axios";

import TextField from "./TextField";

import { Box, Button, useColorModeValue } from "@chakra-ui/react";

const ContactForm = () => {
  const handleOnSubmit = async (values, actions) => {
    // const url = "http://localhost:4000/send_mail"
    // const url = process.env.POST_URL
    const url = "/api/contact";

    axios
      .post(url, {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        actions.resetForm();
      });
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={yupValidation}
      onSubmit={handleOnSubmit}
    >
      {(formik) => (
        <Box as="form" onSubmit={formik.handleSubmit} pb={"100px"}>
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
          <Button type="submit" isLoading={formik.isSubmitting} mt={5}>
            Submit
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default ContactForm;
