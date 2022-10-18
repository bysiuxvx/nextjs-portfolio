import { Box, Center, useColorModeValue } from "@chakra-ui/react";

const Greeter = ({ children }) => {
  return (
    <Center maxW={"container.sm"}>
      <Box
        borderRadius={"lg"}
        mt={8}
        p={2}
        bg={useColorModeValue("#e2d6bf80", "#565659b3")}
        css={{ backdropFilter: "blur(5px)" }}
        position={"relative"}
        textAlign="center"
        w={"20em"}
        userSelect="none"
      >
        {children}
      </Box>
    </Center>
  );
};

export default Greeter;
