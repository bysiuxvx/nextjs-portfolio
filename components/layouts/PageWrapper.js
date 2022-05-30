import { Container } from "@chakra-ui/react"
import { motion } from "framer-motion"

const PageWrapper = ({ children, ...props }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
  }

  return (
    <motion.article
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.5, type: "easeInOut" }}
    >
      <Container maxW={"100%"} pt={120} {...props}>
        {children}
      </Container>
    </motion.article>
  )
}

export default PageWrapper
