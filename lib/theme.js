import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config = {
  // initialColorMode: 'light',
  useSystemColorMode: true,
}

const styles = {
  global: (props) => ({
    nav: {
      bg: mode("#f7e5c080", "#20202380")(props),
      // bg: mode("#fffcf7", "#20202380")(props),
    },
    body: {
      bg: mode("#FDF0D5", "#1d1d21")(props),
      // bg: mode("#EDDFEF", "#1d1d21")(props),
      // bg: mode("#C5D9E2", "#1d1d21")(props),
      // bg: mode("#f0e5d3", "#1d1d21")(props),

      // bg: mode("#E0DFD5", "#1d1d21")(props),
      // bg: mode("#ebf5df", "#1d1d21")(props),
      // bg: mode("#dddbf1", "#1d1d21")(props),
      // bg: mode("#dddbf1", "#272a33")(props),
      // bg: mode("#dddbf1", "#383f51")(props),
      // bg: mode("#dddbf1", "#1a202c")(props),
    },
  }),
}

// 3. extend the theme

const theme = extendTheme({ config, styles })
export default theme
