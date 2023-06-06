import { Box, BoxProps, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

interface iChatGpt extends BoxProps {
  message: iMessageGpt;
}
export interface iMessageGpt {
  id: number;
  nome: string;
  idade: string;
  cidade: string;
  descricao: string;
  image: string;
  ong: string;
  ongLink: string;
}
export const ChatGptImage = ({ message, ...props }: iChatGpt) => {
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
        <Text fontSize={18} pb={2}>
          <strong>
            Para a sua busca o melhor resultado seria este lindo pet:
          </strong>
        </Text>

        <Image
          src={message.image}
          borderRadius={8}
          pb={4}
          alt="cachorro fofinho"
        />

        <Text>
          <strong>Atende por:</strong> {message.nome}
        </Text>
        <Text>
          <strong>Idade:</strong> {message.idade}
        </Text>
        <Text>
          <strong>Cidade:</strong> {message.cidade}
        </Text>
        <Text>
          <strong>Descrição:</strong> {message.descricao}
        </Text>
        <Text>
          <strong>Presente na instituição:</strong>{" "}
          <a href={message.ongLink}>{message.ong}</a>
        </Text>
      </Box>
    </Flex>
  );
};
