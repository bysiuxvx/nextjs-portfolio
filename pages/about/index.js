import Head from "next/head"
import dynamic from "next/dynamic"

import PageWrapper from "../../components/layouts/PageWrapper"
import Paragraph from "../../components/Paragraph"
// import TechnologiesAccordion from "../../components/TechnologiesAccordion"

import { technologiesList } from "../../data/technologiesList"

import {
  SvgContainer,
  SvgWrapper,
  TechnologiesSection,
  StyledIcon,
} from "../../components/TechnologiesContainers"
import {
  Box,
  Center,
  Heading,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react"

import { followCursor } from "tippy.js"
import "tippy.js/dist/tippy.css"

const About = () => {
  const Tooltip = dynamic(() => import("@tippyjs/react"), { ssr: "false" })

  const TechAccordion = dynamic(() =>
    import("../../components/TechnologiesAccordion")
  )

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
    <PageWrapper maxW={"container.md"} pb={100}>
      <Center maxW={"container.sm"}>
        <Box
          borderRadius={"lg"}
          mt={8}
          p={2}
          bg="#e2d6bf80"
          css={{ backdropFilter: "blur(100px)" }}
          position={"relative"}
          textAlign="center"
          w={"20em"}
          userSelect="none"
        >
          Hi again, nice to meet you!
        </Box>
      </Center>
      <Box maxW={"container.sm"} pt={3}>
        <Heading as={"h2"} variant="page-title">
          Patryk Byszek
        </Heading>
        <Text>(Developer / Musician / Coffee enjoyer)</Text>
        <Divider />
        <Heading as={"p"} variant="section-title" fontSize={"1.5em"} pt={3}>
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
        <Divider />
        <Heading as={"p"} variant="section-title" fontSize={"1.5em"} pt={3}>
          Tech
        </Heading>
        <Paragraph>
          Some of the technologies I am familiar with and used during my
          commercial experience:
        </Paragraph>
        <TechnologiesSection pt={2}>
          <SvgContainer bg={useColorModeValue("#e2d6bf80", "#e2d6bf80")}>
            {/* <SvgContainer bg={useColorModeValue("pink", "#e2d6bf80")}> */}
            {technologies}
          </SvgContainer>
        </TechnologiesSection>
        <Text textAlign={"justify"} pt={3}>
          Apart from the above, I have also experimented with several other
          frameworks, state management libraries, databases, CSS preprocessors,
          UI libraries... <br />
        </Text>
        <TechAccordion />
        <Divider />
        <Heading as={"p"} variant="section-title" fontSize={"1.5em"} pt={3}>
          Hobbies
        </Heading>
        <Paragraph>
          My free time I either spend relaxing with my dog, learning something
          new, or playing guitar. I used to play in a band, and even released
          two records on vinyl. I am also a bit of a gamer. Besides the
          mentioned, I also am interested in electronics and with the help of
          tutorials I&apos;ve built small devices like guitar pedal effects -
          most of them worked...
        </Paragraph>
      </Box>
    </PageWrapper>
  )
}

export default About
