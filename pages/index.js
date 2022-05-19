import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import Head from "next/head"
import Typewriter from "typewriter-effect"

import PageWrapper from "../components/layouts/PageWrapper"

import { Box, Container, Heading } from "@chakra-ui/react"

const Page = () => {
  // const [introPlayed, setIntroPlayed] = useState(false)

  const router = useRouter()

  return (
    <PageWrapper
      // pt={0}
      maxW={"container.lg"}
      mb={30}
    >
      <Head>
        <meta
          name="description"
          content="Personal portfolio of Patryk Byszek."
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Test</title>
      </Head>
      <Container>
        <Heading fontSize={["30px", "50px"]} userSelect={"none"}>
          <Typewriter
            options={{ cursor: "" }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString("Hello World!")
                .pauseFor(500)
                .deleteChars("6")
                .typeString("future employer!")
                .pauseFor(500)
                .deleteChars("16")
                .pauseFor(500)
                .typeString("friend!")
                .pauseFor(500)
                .deleteChars("7")
                .pauseFor(500)
                .typeString("mom!")
                .pauseFor(500)
                .deleteChars("4")
                .typeString("World!")
                .start()
            }}
          />
        </Heading>
        <Heading
          fontSize={["25px", "45px"]}
          fontWeight="normal"
          userSelect={"none"}
        >
          <Typewriter
            options={{ cursor: "" }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3500)
                .typeString("I hope you will enjoy what you see!<br/>")
                .pauseFor(1000)
                .typeString("All of my projects are stolen")
                .pauseFor(1000)
                .deleteChars(10)
                .pauseFor(1000)
                .typeString("<strong>were created</strong> by me!")
                .start()
            }}
          />
        </Heading>
      </Container>
    </PageWrapper>
  )
}

export default Page
