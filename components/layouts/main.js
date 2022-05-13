import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"

const Layout = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="description" content="Patryk's portfolio :)" />
        <meta name="author" content="Patryk Byszek" />
        <title>Patryk's portfolio</title>
      </Head>
      <Container maxW={"container.lg"}>{children}</Container>
    </Box>
  )
}

export default Layout
