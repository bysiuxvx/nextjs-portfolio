import { useRouter } from "next/router"
import NextLink from "next/link"

import ColorModeToggler from "./color-mode-toggler"

import {
  Box,
  Container,
  Link,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

const pathList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

const Navbar = () => {
  const router = useRouter()

  const navPaths = pathList.map((item) => (
    <NextLink href={item.path} passHref scroll={false}>
      <Link
        p={2}
        bg={item.path === router.asPath ? "pink" : null}
        // color
        // _hover={{
        //   background: "white",
        //   color: "teal.500",
        // }}
      >
        {item.name}
      </Link>
    </NextLink>
  ))

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      // bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      // {...props}
    >
      <Container display={"flex"} p={2} maxW={"container.md"} flexWrap={"wrap"}>
        <Stack
          direction={["column", "row"]}
          display={["none", "flex"]}
          alignItems="center"
          flexGrow={0}
        >
          {navPaths}
        </Stack>
        <Box flex={1} align="right" mr={4}>
          <ColorModeToggler />
          <Box ml={2} display={["inline-block", "none"]}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>{navPaths}</MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
