import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Flex justifyContent="space-between" w="full" maxW="1620px" py={4} px={5}>
      <Text color="white" fontSize={20} fontWeight={600} as="a" href="/">
        GPTdog
      </Text>
      <Flex gap={2}>
        <Button colorScheme="pink" variant="ghost" as="a" href="/">
          Chat
        </Button>
        <Button colorScheme="pink" as="a" href="/seja-parceiro">
          Seja parceiro
        </Button>
      </Flex>
    </Flex>
  );
};
