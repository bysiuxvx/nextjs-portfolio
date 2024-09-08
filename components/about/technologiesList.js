import { SvgContainer, SVG, StyledIcon } from "./TechnologiesContainers"
import { useColorModeValue } from "@chakra-ui/react"
import Tippy from "@tippyjs/react"
import { followCursor } from "tippy.js"
import "tippy.js/animations/scale-subtle.css"
import "tippy.js/dist/tippy.css"
import { Angular, Typescript, Nextjs2, Redux, Express } from "../../SVG"

const TechContainer = () => {
  const technologies = technologiesList.map((technology) => (
    <Tippy
      content={technology.comment}
      followCursor={true}
      key={technology.name}
      plugins={[followCursor]}
      animation="scale-subtle"
    >
      <SVG>
        <StyledIcon as={technology.image} />
      </SVG>
    </Tippy>
  ))

  return (
    <SvgContainer bg={useColorModeValue("#9ed8db4d", "#565659b3")}>
      {technologies}
    </SvgContainer>
  )
}

const technologiesList = [
  {
    name: "TypeScript",
    image: Typescript,
    imageAlt: "TypeScript logo",
    comment: `It was a bit frustrating to use in the beginning due to all the errors and interface setups, but that's actually the point ot if.
    And I noticed - I don't repeat those mistakes too often afterwards 🤓.`,
  },
  {
    name: "Angular",
    image: Angular,
    imageAlt: "Angular logo",
    comment:
      "Coming from React, it was a bit confusing to use in the beginning when I landed my first junior position in a company using Agular in all of the projects. It took me some time to get used to it, but nowadays I really enjoy it. What I appreciate the most about Angualr is that it comes as a whole package that just works. You don't need to contemplate for hours what library to use for forms, what state management to go for. It's that simple. I love RXJS and the fact that Signals are now a part of Angular too.",
  },
  {
    name: "Next.js",
    image: Nextjs2,
    imageAlt: "Next.js logo",
    comment: `I love React, most of the things I do privately are in React. Next.js is just the next step. I like how some things have been improved and even simplified, like the routing as an example. SSR is also going to become a standard soon if not already, which is the main point of this framework.`,
  },
  {
    name: "Redux",
    image: Redux,
    imageAlt: "Redux logo",
    comment: `My view on Redux has changed many times. I find that Redux Toolkit is quite ok, but still, there's better ways to do state management in my opinion. Zustand, or even better Jotai, as examples.`,
  },
  {
    name: "Express",
    image: Express,
    imageAlt: "Express logo",
    comment:
      "Commercially I've never really worked on a backend, as that was never my role, and I never had a Node.js backend at work. But I've written many middlewares for swagger to test the functionality and interactivity of the Angular applications I've worked on.",
  },
]

export default TechContainer
