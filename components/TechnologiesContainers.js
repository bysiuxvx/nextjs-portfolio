import { Box, Icon } from "@chakra-ui/react"
import styled from "@emotion/styled"

export const TechnologiesSection = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SvgContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 18.75rem;
  height: 12.5rem;
  border-radius: 1.5rem;
`
export const SvgWrapper = styled(Box)`
  display: inline-block;
  margin: 0 10px;
`
export const StyledIcon = styled(Icon)`
  height: 50px;
  width: 50px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.3);
  }
`
