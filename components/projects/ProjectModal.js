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
  Link,
  useColorModeValue,
} from "@chakra-ui/react"

import { BsGithub, BsPlayFill } from "react-icons/bs"

const ProjectModal = ({ project, setModalContent }) => {
  const buttonColor = useColorModeValue("purple", "orange")
  const modalColor = useColorModeValue("#e1e9d7", "#565659")
  const dividerColor = useColorModeValue("black", "lightgrey")

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
          <ModalContent
            bg={modalColor}
            style={{
              boxShadow: "inset 0 8px 32px 0 rgba( 31, 38, 135, 0.17 )",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            <ModalHeader fontSize={{ sm: "md", md: "lg" }}>
              {project.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={0}>
              <Image
                src={project.image}
                alt={project.name}
                style={{ borderRadius: "10px" }}
                placeholder="blur"
              />
              <Text textAlign={"justify"} fontSize={{ sm: "md", md: "lg" }}>
                {project.description}
              </Text>
              <Wrap p={2}>
                <Button
                  as={Link}
                  href={project.githubURL}
                  isExternal
                  leftIcon={<BsGithub />}
                  colorScheme={buttonColor}
                  style={{ textDecoration: "none" }}
                >
                  Github
                </Button>
                <Button
                  as={Link}
                  href={project.liveDemo}
                  isExternal
                  leftIcon={<BsPlayFill />}
                  colorScheme={buttonColor}
                  style={{ textDecoration: "none" }}
                >
                  Demo
                </Button>
              </Wrap>
              {project.techStack ? (
                <>
                  <Divider
                    orientation="horizontal"
                    // pt={2}
                    borderBottomColor={dividerColor}
                  />
                  <Wrap p={3}>
                    {project.techStack.map((tech) => (
                      <Tag
                        mt={2}
                        key={tech}
                        style={{
                          border: "1px solid rgba( 255, 255, 255, 0.18 )",
                        }}
                      >
                        {tech}
                      </Tag>
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
