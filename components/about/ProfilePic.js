import Image from "next/image"
import { Box } from "@chakra-ui/react"

import mypic from "../../public/images/me.jpg"
const ProfilePic = () => {
  return (
    <Box
      borderColor="whiteAlpha.800"
      borderWidth={1}
      borderStyle="solid"
      w="150px"
      h="150px"
      display="inline-block"
      borderRadius="full"
      overflow="hidden"
      position={"relative"}
      boxShadow={"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"}
    >
      <Image
        src={mypic}
        alt="Profile image"
        borderRadius="full"
        width="150px"
        height="150px"
        priority
        placeholder="blur"
      />
    </Box>
  )
}

export default ProfilePic
