import Head from "next/head"
import dynamic from "next/dynamic"

import PageWrapper from "../../components/layouts/PageWrapper"
import Emoji from "../../components/Emoji"

// import Tippy from "@tippy.js/react"
import { followCursor } from "tippy.js"

import {
  Container,
  Box,
  Center,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import Paragraph from "../../components/Paragraph"
import {
  SvgContainer,
  SvgWrapper,
  TechnologiesSection,
  StyledIcon,
} from "../../components/TechnologiesContainers"

import "tippy.js/dist/tippy.css"
import { technologiesList } from "./technologiesList"

const About = () => {
  const Tooltip = dynamic(() => import("@tippy.js/react"), { ssr: "false" })

  const technologies = technologiesList.map((technology) => (
    <Tooltip
      content={technology.comment}
      followCursor={true}
      plugins={[followCursor]}
      key={technology.name}
    >
      <SvgWrapper>
        <StyledIcon as={technology.image} />
      </SvgWrapper>
    </Tooltip>
  ))

  const myAge = () => {
    var today = new Date()
    var birthDate = new Date("1991-07-16")
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <PageWrapper maxW={"container.md"}>
      <Center>
        <Box
          borderRadius={"lg"}
          p={3}
          bg="#e2d6bf80"
          css={{ backdropFilter: "blur(100px)" }}
          position={"relative"}
          textAlign="center"
          w={"20em"}
        >
          Hi again, nice to meet you!
        </Box>
      </Center>
      <Box maxW={"container.sm"}>
        <Heading as={"h2"} variant="page-title">
          Patryk Byszek
          <br />
          DODAJ TEKST JAKIS
        </Heading>
        <Heading as={"p"} variant="section-title" fontSize={"1.5em"}>
          Bio
        </Heading>
        <Paragraph>
          I&apos;m a junior frontend developer, with close to two years of
          hobbyist experience. Prior to that I&apos;ve worked on several
          technical positions, from local and remote support to IT / System
          admin. Currently I am unfortunately not working professionally as a
          developer, but I am still trying to find a spot for me. As of now I am
          doing my best to become a fullstack dev by learning Node, specifically
          Express.
        </Paragraph>
        <Heading as={"p"} variant="section-title" fontSize={"1.5em"}>
          Tech
        </Heading>
        <Paragraph>
          Some of the technologies I am familiar with and used during my
          commercial experience:
        </Paragraph>
        <TechnologiesSection>
          <SvgContainer bg={useColorModeValue("pink", "red")}>
            {technologies}
          </SvgContainer>
        </TechnologiesSection>
        <Heading as={"p"} fontSize={"1.5em"}>
          Hobbies
        </Heading>
        <Paragraph>
          My free time I either spend relaxing with my dog, learning something
          new, or playing guitar. I used to play in a band and even released two
          records on vinyl. I am also a bit of a gamer. Besides the mentioned, I
          also am interested in electronics and with the help of tutorials
          I&apos;ve built small devices like guitar pedal effects - most of them
          worked...
        </Paragraph>
      </Box>
    </PageWrapper>
  )
}

export default About
