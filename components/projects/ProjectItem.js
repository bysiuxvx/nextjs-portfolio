import dynamic from "next/dynamic"
import Image from "next/image"

import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  GridItem,
} from "@chakra-ui/react"

const Project = ({ project }) => {
  // const img = dynamic(
  //   () => (
  //     <Image src={project.image} alt={project.imageAlt} placeholder="blur" />
  //   ),
  //   { ssr: false, loading: () => {} }
  // )

  return (
    <Box w="%" textAlign="center">
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
    </Box>
  )
}

export default Project
