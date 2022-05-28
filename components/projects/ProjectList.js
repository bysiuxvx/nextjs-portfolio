import { useState } from "react"

import { projectList } from "../../data/project-list"

import ProjectItem from "./ProjectItem"
import ProjectModal from "./ProjectModal"

import { Container, SimpleGrid, useDisclosure } from "@chakra-ui/react"

const ProjectList = () => {
  const [modalContent, setModalContent] = useState()

  const projects = projectList.map((project) => (
    <ProjectItem
      key={project.name}
      project={project}
      setModalContent={setModalContent}
    />
  ))

  return (
    <Container maxW={"container.xl"}>
      <SimpleGrid
        columns={2}
        // columns={{ sm: 2, md: 3 }}
        spacing={10}
      >
        {projects}
      </SimpleGrid>
      <ProjectModal project={modalContent} setModalContent={setModalContent} />
    </Container>
  )
}

export default ProjectList
