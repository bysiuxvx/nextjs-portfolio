import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  Icon,
  Text,
} from "@chakra-ui/react"

import { EditIcon, SettingsIcon, ViewIcon } from "@chakra-ui/icons"

const TechnologiesAccordion = () => {
  return (
    <Accordion allowToggle allowMultiple>
      <AccordionItem>
        <Text>
          <AccordionButton _expanded={{ bg: "#e2d6bf80" }}>
            <Box flex={1} textAlign="justify">
              Some of my favorites I&apos;d like to mention:
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel>
          {techElements.map((element) => (
            <AccordionItem key={element.name}>
              <Text>
                <AccordionButton _expanded={{ bg: "#e2d6bf80" }}>
                  <Box flex="1" textAlign="left">
                    <Icon as={element.icon} /> {element.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel textAlign={"justify"}>
                {element.description}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default TechnologiesAccordion

const techElements = [
  {
    name: "Chakra UI",
    icon: ViewIcon,
    description:
      "I appreciate this library for it's simplicity. So far I&apos;ve used it several times, and this portfolio was also built with it.",
  },
  {
    name: "shadcn/ui",
    icon: ViewIcon,
    description:
      "Currently I don't have a public project using this library. As of now (september 2024) I am working on a bigger project that uses shadcn/ui with Tailwind. It's the perfect library to integrate with Next.js.",
  },
  {
    name: "Jotai",
    icon: SettingsIcon,
    description:
      "Simple and easy to use state management. It's from the same developer who made Zustand, another library I've enjoyed and used in the past. Jotai is even simpler than Zustand. Just create an atom in a store file, and import it wherever you feel the need to. It's as simple as that.",
  },
  {
    name: "SWR / React Query",
    icon: SettingsIcon,
    description:
      "Both libraries are perfect for handling and invalidating data. Simplicity and performance, allows for quick development of applications.",
  },
  {
    name: "Prisma",
    icon: EditIcon,
    description:
      "ORM for simplifying database queries. Great developer experience, efficient on top of it.",
  },
]
