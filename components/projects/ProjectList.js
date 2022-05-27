import Project from "./ProjectItem"

import { projectList } from "../../data/project-list"

import { Container, SimpleGrid } from "@chakra-ui/react"

const ProjectList = () => {
  const projects = projectList.map((project) => (
    <Project key={project.name} project={project} />
  ))

  return (
    <Container maxW={"container.xl"}>
      <SimpleGrid columns={2}>{projects}</SimpleGrid>
    </Container>
  )
}

export default ProjectList
