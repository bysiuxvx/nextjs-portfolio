import dynamic from "next/dynamic"
import Head from "next/head"

import PageWrapper from "../../components/layouts/PageWrapper.js"
import Paragraph from "../../components/Paragraph.js"
import TechnologiesAccordion from "../../components/about/TechnologiesAccordion.js"
import SvgSpinner from "../../components/about/SvgSpinner.js"
import ProfilePic from "../../components/about/ProfilePic"
import Greeter from "../../components/greeter"
import { TechnologiesSection } from "../../components/about/TechnologiesContainers.js"

import { Box, Heading, Text, Divider, Flex } from "@chakra-ui/react"

const About = () => {
  const TechContainer = dynamic(
    () => import("../../components/about/technologiesList"),
    {
      ssr: "false",
      loading: () => <SvgSpinner />,
    }
  )

  const calculateAge = () => {
    const today = new Date()
    const birthDate = new Date("1991-07-16")
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age -= 1
    }
    return age
  }

  return (
    <PageWrapper maxW={"container.md"} pb={100}>
      <Head>
        <title>Patryk Byszek</title>
      </Head>
      <Greeter>Hi again, nice to meet you!</Greeter>
      <Box maxW={"container.sm"} pt={3}>
        <Box display={{ md: "flex" }} p={5}>
          <Flex flexDir={"column"} flexGrow={1} justifyContent={"center"}>
            <Heading as="h2" variant="page-title">
              Patryk Byszek
            </Heading>
            <Text>{calculateAge()}, Developer, Musician, Coffee enjoyer</Text>
          </Flex>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <ProfilePic />
          </Box>
        </Box>
        <Divider pt={3} pl={10} />
        <Heading as={Text} variant="section-title" fontSize={"1.5em"} pt={3}>
          Bio
        </Heading>
        <Paragraph>
          I&apos;m a frontend developer, with two years of commercial
          experience. Prior to that I&apos;ve worked on several technical
          positions, from local and remote support to IT / System admin. I enjoy
          writing backends in Express. Becoming a fullstack developer is my
          future goal.
        </Paragraph>
        <Divider pt={3} />
        <Heading as={"p"} variant="section-title" fontSize={"1.5em"} pt={3}>
          Tech
        </Heading>
        <Paragraph>
          Some of the technologies I am familiar with and used during my
          commercial experience:
        </Paragraph>
        <TechnologiesSection pt={3}>
          <TechContainer />
        </TechnologiesSection>
        <Text textAlign={"justify"} pt={4} pb={3}>
          Apart from the above, I have also experimented with several other
          frameworks, state management libraries, databases, CSS preprocessors,
          UI libraries... <br />
        </Text>
        <TechnologiesAccordion />
        <Heading as={"p"} variant="section-title" fontSize={"1.5em"} pt={3}>
          Hobbies
        </Heading>
        <Paragraph>
          My free time I either spend relaxing with my dog, working out at the
          gym, or playing guitar. I used to play in a band, and even released
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
