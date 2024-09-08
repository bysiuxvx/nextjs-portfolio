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

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`
export const SVG = styled(Box)`
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
`
export const StyledIcon = styled(Icon)`
  height: 50px;
  width: 50px;
  transition: 0.15s;
  &:hover {
    transform: scale(1.3);
  }
`
export const SpinnerContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.75rem;
  height: 12.5rem;
  border-radius: 1.5rem;
`
