import { Spinner, useColorModeValue } from "@chakra-ui/react"

import { SpinnerContainer } from "./TechnologiesContainers"

export const SvgSpinner = () => {
  return (
    <SpinnerContainer bg={useColorModeValue("#e2d6bf80", "#e2d6bf80")}>
      <Spinner thickness="4px" speed="0.8s" size={"xl"} />
    </SpinnerContainer>
  )
}

export default SvgSpinner
