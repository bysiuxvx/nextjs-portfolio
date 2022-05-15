import { Container } from "@chakra-ui/react"

const PageWrapper = ({ children, ...props }) => {
  return (
    <Container maxW={"100%"} pt={120} {...props}>
      {children}
    </Container>
  )
}

export default PageWrapper
