import dynamic from "next/dynamic"
import Image from "next/image"

import { Box, Heading } from "@chakra-ui/react"
import { Global } from "@emotion/react"

const ProjectItem = ({ project, setModalContent, onOpen }) => {
  return (
    <Box
      w={"100%"}
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
        width={"720"}
        height={"400"}
        src={project.image}
        alt={project.imageAlt}
        placeholder="blur"
        p={5}
        objectFit="contain"

        // priority
      />

      <Heading fontSize={18}>{project.name}</Heading>

      <ProjectItemStyle />

      {/* <Heading fontSize={18}>{project.name}</Heading>
      <Accordion allowToggle allowMultiple>
        <AccordionItem>
          <Text>
            <AccordionButton _expanded={{ bg: "#e2d6bf80" }}>
              <Box flex={1} textAlign={"left"}>
                Details
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Text>
          <AccordionPanel textAlign={"justify"}>
            <Text>{project.description}</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <ProjectItemStyle /> */}
    </Box>
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
}
`}
  />
)
