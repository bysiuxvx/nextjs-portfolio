import { useState } from "react"
import dynamic from "next/dynamic"

import { projectList } from "../../data/project-list"

import ProjectModal from "./ProjectModal"
import { ProjectLoader } from "./ProjectItem"

import { Container, SimpleGrid, useDisclosure } from "@chakra-ui/react"
import YourProject from "./YourProject"

const ProjectList = () => {
  const [modalContent, setModalContent] = useState()

  const ProjectItem = dynamic(() => import("./ProjectItem"), {
    loading: () => ProjectLoader,
  })

  const projects = projectList.map((project) => (
    <ProjectItem
      key={project.name}
      project={project}
      setModalContent={setModalContent}
    />
  ))

  return (
    <Container maxW={"container.xl"}>
      <SimpleGrid columns={2} spacing={10}>
        <YourProject />
        {projects}
      </SimpleGrid>
      <ProjectModal project={modalContent} setModalContent={setModalContent} />
    </Container>
  )
}

export default ProjectList
