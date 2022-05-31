import { useRouter } from "next/router"
import NextLink from "next/link"

import ColorModeToggler from "./ColorModeToggler.js"

import {
  Box,
  Container,
  Link,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  useColorModeValue,
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
  const bgColor = useColorModeValue("#9ed8db", "orange")

  const navPaths = pathList.map((item) => (
    <NextLink href={item.path} passHref scroll={false} key={item.name}>
      <Link
        p={2}
        borderRadius={7}
        bg={item.path === router.asPath ? bgColor : null}
        _hover={
          item.path === router.asPath
            ? { textDecoration: "none" }
            : {
                textDecoration: "none",
                cursor: "pointer",
                transform: "translateY(-3.5px)",
                transition: ".5s",
              }
        }
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
      backdropFilter={"blur(2.5px)"}
      zIndex={1}
    >
      <Container display={"flex"} p={2} maxW={"container.md"} flexWrap={"wrap"}>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          {navPaths}
        </Stack>
        <Box flex={1} align="right" mr={4}>
          <ColorModeToggler />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList
                bg={useColorModeValue("#f7e5c080", "#20202380")}
                backdropFilter={"blur(10.5px)"}
              >
                {navPaths}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
