import Head from "next/head";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Configuration } from "openai";

export default function Home() {
  return (
    <>
      <Head>
        <title>GPTdog</title>
      </Head>
      <Flex minH="100vh" bg="gray.900" flexDir="column" alignItems="center">
        <Header />
        <Flex
          color="white"
          flexDir="column"
          gap={6}
          w="100%"
          maxW="1440px"
          h="80vh"
          p={8}
          overflowY={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign="center"
        >
          <Text fontSize={42} fontWeight={600}>
            GPTdog
          </Text>
          <Text fontSize={32} opacity={0.6} fontWeight={400}>
            Descubra a alegria de encontrar o cachorro ideal para adoção.
            Junte-se a nós e faça parte de uma jornada repleta de amor e caudas
            abanando!
          </Text>
          <Button
            as="a"
            href="/chat"
            mt={5}
            colorScheme="pink"
            size="lg"
            borderRadius={80}
            h={"80px"}
            px={12}
            fontSize={24}
          >
            Encontre seu novo mascote
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
