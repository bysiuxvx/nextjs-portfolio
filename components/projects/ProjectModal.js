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
} from "@chakra-ui/react"

const ProjectModal = ({ project, setModalContent }) => {
  const stack = project.techStack
    ? project.techStack.map((tech) => <Tag key={tech}>{tech}</Tag>)
    : null

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
              <Image src={project.image} alt={project.name} />
              <Text textAlign={"justify"} fontSize={{ sm: "md", md: "lg" }}>
                {project.description}
              </Text>
              {/* {project.techStack &&
                project.techStack.map((tech) => <Tag key={tech}>{tech}</Tag>)} */}
              {stack}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default ProjectModal
