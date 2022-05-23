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

import { SettingsIcon, ViewIcon } from "@chakra-ui/icons"

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
          <AccordionItem>
            <Text>
              <AccordionButton _expanded={{ bg: "#e2d6bf80" }}>
                <Box flex="1" textAlign="left">
                  <Icon as={ViewIcon} /> Chakra UI
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel textAlign={"justify"}>
              Honestly, by far the best and most fun UI library I ever used. So
              far I&apos;ve used it several times, and this portfolio was also
              built with it. I love how easy it is to set up themes and the
              theme switching component itselft, which can be used for example
              for light / dark modes. Can only recommend.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton _expanded={{ bg: "#e2d6bf80" }}>
                <Box flex="1" textAlign="left">
                  <Icon as={SettingsIcon} /> Zustand
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel textAlign={"justify"}>
              Simple and easy to use state management that kind of reminds me of
              Redux Toolkit, but with even less boilerplate. I have used it
              already on several occassions and it&apos;s my go to solution
              whenever I have to work with state.
            </AccordionPanel>
          </AccordionItem>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default TechnologiesAccordion
