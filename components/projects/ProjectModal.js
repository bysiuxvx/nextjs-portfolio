import Image from "next/image"

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  Text,
  Tag,
  Wrap,
  Divider,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react"

import styled from "@emotion/styled"

// import { AiFillGithub } from "react-icons/ai"
import { BsGithub, BsPlayFill } from "react-icons/bs"

const ProjectModal = ({ project, setModalContent }) => {
  return (
    <>
      {project && (
        <Modal
          isOpen={project ? true : false}
          onClose={() => {
            setModalContent("")
          }}
          size={{ sm: "sm", md: "xl" }}
        >
          <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
          <ModalContent>
            <ModalHeader fontSize={{ sm: "md", md: "lg" }}>
              {project.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={project.image}
                alt={project.name}
                style={{ borderRadius: "10px" }}
              />
              <Text textAlign={"justify"} fontSize={{ sm: "md", md: "lg" }}>
                {project.description}
              </Text>
              <Wrap p={2}>
                <Button
                  as={Link}
                  href={project.githubURL}
                  target="_blank"
                  leftIcon={<BsGithub />}
                  textDecoration={"none"}
                >
                  Github
                </Button>
                <Button
                  as={Link}
                  href={project.liveDemo}
                  target="_blank"
                  leftIcon={<BsPlayFill />}
                >
                  Demo
                </Button>
              </Wrap>
              {project.techStack ? (
                <>
                  <Divider orientation="horizontal" pt={2} />
                  <Wrap p={2}>
                    {project.techStack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </Wrap>
                </>
              ) : null}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default ProjectModal
