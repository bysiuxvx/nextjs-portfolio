import { Formik } from "formik";
import { yupValidation } from "../../lib/yup-validation";

import axios from "axios";

import TextField from "./TextField";

import { Box, Button, FormLabel, useToast } from "@chakra-ui/react";

const ContactForm = () => {
  const toast = useToast();

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={yupValidation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        axios
          .post("/api/contact", {
            name: values.name,
            email: values.email,
            message: values.message,
          })
          .then((res) => {
            if (res) {
              toast(toastOptions);
              setSubmitting(false);
              resetForm();
            }
          });
      }}
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
          {formik.isSubmitting && <FormLabel pt={2}>Please wait...</FormLabel>}
          <Button
            type="submit"
            disabled={formik.isSubmitting}
            isLoading={formik.isSubmitting}
            mt={5}
          >
            Submit
          </Button>
        </Box>
      )}
    </Formik>
  );
};

const toastOptions = {
  title: "Email sent",
  description:
    "Thank you for contacting me, I will get in touch with you as soon as possible!",
  status: "success",
  duration: 9000,
  isClosable: true,
  position: "bottom-left",
};

export default ContactForm;
