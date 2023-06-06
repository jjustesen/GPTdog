import { Box, BoxProps, Flex } from "@chakra-ui/react";
import React from "react";

interface iChatUser extends BoxProps {
  message: string;
}

export const ChatUser = ({ message = "Teste", ...props }: iChatUser) => {
  return (
    <Flex w="full" justifyContent="end">
      <Box
        {...props}
        color="gray.200"
        bg="gray.400"
        p={5}
        borderRadius={"16px 16px 0px 16px"}
        fontSize={16}
        maxW={{ base: "80%", md: 600 }}
        w="fit-content"
      >
        {message}
      </Box>
    </Flex>
  );
};
