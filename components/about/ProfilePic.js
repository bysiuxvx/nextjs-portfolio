import { Spinner } from "@chakra-ui/react"
import Image from "next/image"

const ProfilePic = () => {
  return (
    <Image
      src={"/images/me.jpg"}
      alt="Profile image"
      borderRadius="full"
      width="150px"
      height="150px"
      priority
      //   placeholder="blur"
    />
  )
}

export default ProfilePic

export const ProfilePicSpinner = () => (
  <Spinner
    thickness="4px"
    speed="0.8s"
    size={"xl"}
    position={"absolute"}
    left="50%"
    top="50%"
  />
)
