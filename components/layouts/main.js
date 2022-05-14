import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"

import Navbar from "../navbar"

const Layout = ({ children, router }) => {
  return (
    <Box as="main" h="calc(100vh)">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Patryk's portfolio" />
        <meta name="author" content="Patryk Byszek" />
        <title>Patryk's portfolio</title>
      </Head>
      {/* <Container maxW={"container.lg"}> */}
      <Navbar path={router.asPath} />
      {/* </Container> */}
      <Container maxW={"container.lg"} pt={15}>
        {children}
      </Container>
    </Box>
  )
}

export default Layout
