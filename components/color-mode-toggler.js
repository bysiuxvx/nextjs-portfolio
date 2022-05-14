import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const ColorModeToggler = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="toggle color mode"
      colorScheme={useColorModeValue("purple", "orange")}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    />
  )
}

export default ColorModeToggler
