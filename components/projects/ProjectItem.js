import dynamic from "next/dynamic"
import Image from "next/image"

import { Box, Heading, Text, Link } from "@chakra-ui/react"
import { Global } from "@emotion/react"

const ProjectItem = ({ project, setModalContent, onOpen }) => {
  const Tilt = dynamic(() => import("react-parallax-tilt"), {
    ssr: "false",
  })

  return (
    <Tilt className="parallax-effect" perspective={500}>
      <Box
        w={"100%"}
        p={3}
        textAlign="center"
        className="project-item-container"
        cursor={"pointer"}
        onClick={() => {
          onOpen
          setModalContent(project)
        }}
        title={project.name}
      >
        <Image
          className="project-item-image inner-element"
          width={"720"}
          height={"400"}
          src={project.image}
          alt={project.imageAlt}
          placeholder="blur"
          objectFit="contain"
        />

        <Heading className="inner-element" fontSize={18}>
          {project.name}
        </Heading>
        {project.shortDescription && (
          <Text className="inner-element">{project.shortDescription}</Text>
        )}
      </Box>
      <ProjectItemStyle />
    </Tilt>
  )
}

export default ProjectItem

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
        // transition: .5s;
        // &:hover{
        //   // transform: translateY(-5px);
        //   transform: scale(1.03);
        // }
      },
      .project-item-image {
        border-radius: 10px
      },
      .parallax-effect {
        width: fit-content;
        height: fit-content;
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
