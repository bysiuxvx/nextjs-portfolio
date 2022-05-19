import { Box } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box
      align="center"
      opacity={0.4}
      fontSize="sm"
      userSelect={"none"}
      pt={30}
      pb={4}
      css={{
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      &copy; {new Date().getFullYear()} Patryk Byszek. All Rights Reserved.
    </Box>
  )
}

export default Footer
