import { Formik } from "formik";
import { yupValidation } from "../../lib/yup-validation";

import axios from "axios";

import TextField from "./TextField";

import { Box, Button, FormLabel, useToast } from "@chakra-ui/react";
import Greeter from "../greeter";
import PageWrapper from "../layouts/PageWrapper";

const ContactForm = () => {
  const toast = useToast();

  return (
    <PageWrapper mt={-100}>
      <Greeter>
        If you are interested in some sort of collaboration you can reach me
        through here!
      </Greeter>
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
              if (!res.data.success) {
                toast(toastOptions.failed);
                setSubmitting(false);
              } else {
                toast(toastOptions.success);
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
              disabled={formik.isSubmitting}
            />
            <TextField
              name="email"
              type="email"
              component="input"
              label="Your email"
              placeholder="Enter your email"
              disabled={formik.isSubmitting}
            />
            <TextField
              name="message"
              type="message"
              component="textarea"
              label="Your message"
              placeholder="Enter your message"
              disabled={formik.isSubmitting}
            />
            {formik.isSubmitting && (
              <FormLabel pt={2}>Please wait...</FormLabel>
            )}
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
    </PageWrapper>
  );
};

const toastOptions = {
  success: {
    title: "Email sent",
    description:
      "Thank you for contacting me, I will get in touch with you as soon as possible!",
    status: "success",
    duration: 9000,
    isClosable: true,
    position: "bottom-left",
  },
  failed: {
    title: "Email wasn't sent",
    description:
      "Your email couldn't be sent for some reason. Please try sending it again now, or give it a try later.",
    status: "error",
    duration: 12000,
    isClosable: true,
    position: "bottom-left",
  },
};

export default ContactForm;
