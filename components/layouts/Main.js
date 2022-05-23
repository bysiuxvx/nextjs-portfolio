import { useEffect, useState } from "react"

import Head from "next/head"
import dynamic from "next/dynamic"

import Footer from "../footer"
import Navbar from "../Navbar"
import VoxelLoader from "../VoxelLoader.js"

import { Box, Center, Container, Flex } from "@chakra-ui/react"

const DynamicVoxelModel = dynamic(() => import("../VoxelModel.js"), {
  ssr: false,
  loading: () => <VoxelLoader />,
})

const Layout = ({ children, router }) => {
  return (
    <Box as="main" h="calc(100vh)" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Patryk's portfolio" />
        <meta name="author" content="Patryk Byszek" />
        <title>Patryk&apos;s portfolio</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW={"container.md"} pt={14}>
        <DynamicVoxelModel />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Layout
