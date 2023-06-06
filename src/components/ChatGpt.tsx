import { Box, BoxProps, Flex } from "@chakra-ui/react";
import React from "react";

interface iChatGpt extends BoxProps {
  message: string;
}

export const ChatGpt = ({ message = "Teste", ...props }: iChatGpt) => {
  return (
    <Flex>
      <Box
        {...props}
        color="gray.200"
        bg="pink.500"
        p={5}
        borderRadius={"16px 16px 16px 0px"}
        fontSize={16}
        maxW={{ base: "80%", md: 600 }}
        w="fit-content"
      >
        {message}
      </Box>
    </Flex>
  );
};
