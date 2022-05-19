import { forwardRef } from "react"
import { Spinner, Box } from "@chakra-ui/react"

export const VoxelSpinner = () => (
  <Spinner
    thickness="4px"
    speed="0.8s"
    size={"xl"}
    position={"absolute"}
    left="50%"
    top="50%"
  />
)

export const VoxelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    m={"auto"}
    pt={35}
    mt={["-20px", "-60px", "-120px"]}
    mb={["-40px", "-140px", "-200px"]}
    w={[280, 480, 640]}
    h={[380, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const VoxelLoader = () => {
  return (
    <VoxelContainer>
      <VoxelSpinner />
    </VoxelContainer>
  )
}

export default VoxelLoader
