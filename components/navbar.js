import NextLink from "next/link"

import { Box, Container, Flex, Link, Stack } from "@chakra-ui/react"

const pathList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

const navPaths = pathList.map((item) => (
  <NextLink
    href={item.path}
    passHref
    scroll={false}
    //   scroll
    //   scroll
    //   scroll
  >
    <Link
      p={2}
      // bg
      // color
    >
      {item.name}
    </Link>
  </NextLink>
))

const Navbar = (props) => {
  const { path } = props

  return (
    <Box as="nav" position={"fixed"} w={"100%"} {...props} zIndex={1}>
      <Container
        display={"flex"}
        p={2}
        maxW={"container.md"}
        flexWrap={"wrap"}
        align={"center"}
        justify=""
      >
        {/* <Flex></Flex> */}
        <Stack direction={["column", "row"]}>{navPaths}</Stack>
      </Container>
    </Box>
  )
}

export default Navbar
