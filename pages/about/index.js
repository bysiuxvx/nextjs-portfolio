import dynamic from "next/dynamic"
import Image from "next/image"
import Head from "next/head"

import PageWrapper from "../../components/layouts/PageWrapper.js"
import Paragraph from "../../components/Paragraph.js"
import TechnologiesAccordion from "../../components/TechnologiesAccordion.js"
import SvgSpinner from "../../components/SvgSpinner.js"
import { TechnologiesSection } from "../../components/TechnologiesContainers.js"

import { Box, Center, Heading, Text, Divider, Flex } from "@chakra-ui/react"

const About = () => {
  const TechContainer = dynamic(
    () => import("../../components/technologiesList"),
    {
      ssr: "false",
      loading: () => <SvgSpinner />,
    }
  )

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
      <Head>
        <title>Patryk Byszek</title>
      </Head>
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
        <Box display={{ md: "flex" }} p={5}>
          <Flex flexDir={"column"} flexGrow={1} justifyContent={"center"}>
            <Heading as="h2" variant="page-title">
              Patryk Byszek
            </Heading>
            <Text>{myAge()}, Developer, Musician, Coffee enjoyer</Text>
          </Flex>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={1}
              borderStyle="solid"
              w="150px"
              h="150px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
              boxShadow={"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"}
            >
              <Image
                src={"/images/me.jpg"}
                alt="Profile image"
                borderRadius="full"
                width="150px"
                height="150px"
                priority
              />
            </Box>
          </Box>
        </Box>
        <Divider pt={3} pl={10} />
        <Heading as={Text} variant="section-title" fontSize={"1.5em"} pt={3}>
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
