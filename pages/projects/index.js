import PageWrapper from "../../components/layouts/PageWrapper"
import ProjectList from "../../components/projects/ProjectList"

const Projects = () => {
  return (
    <PageWrapper maxW={"container.md"} pb={100}>
      <ProjectList />
    </PageWrapper>
  )
}

export default Projects
