import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import Image from "next/image"

import GalaxyImage from "../../public/images/projects/galaxy.jpg"
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import Emoji from "../Emoji"
import { Global } from "@emotion/react"
import Link from "next/link"

const YourProject = () => {
  const router = useRouter()

  const Tilt = dynamic(() => import("react-parallax-tilt"), {
    ssr: "false",
  })

  return (
    <Tilt>
      <Link href="/contact">
        <Box
          w={"100%"}
          h={"100%"}
          p={3}
          textAlign="center"
          className="project-item-container"
          cursor={"pointer"}
          bg={useColorModeValue("#9ed8db4d", "#565659b3")}
        >
          <Image
            className="project-item-image inner-element"
            width={"720"}
            height={"400"}
            src={GalaxyImage}
            alt={"Background photo of space"}
            placeholder="blur"
            objectFit="contain"
          />
          <Heading className="inner-element" fontSize={18}>
            Your project!
          </Heading>

          <Text className="inner-element">
            So let&apos;s start working on it! <Emoji symbol="🤓" />{" "}
          </Text>
        </Box>
      </Link>
    </Tilt>
  )
}

export default YourProject

export const ProjectItemStyle = () => (
  <Global
    styles={`
        .project-item-container {
          background: rgba( 255, 255, 255, 0.25 );
          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
          backdrop-filter: blur( 4px );
          -webkit-backdrop-filter: blur( 4px );
          border-radius: 10px;
          border: 1px solid rgba( 255, 255, 255, 0.18 );
        },
        .project-item-image {
          border-radius: 10px
        },
        .parallax-effect {
          @include background;
          // display: flex;
        
          transform-style: preserve-3d;
        
          .inner-element {
            transform: translateZ(160px);
          }
        }
      `}
  />
)
