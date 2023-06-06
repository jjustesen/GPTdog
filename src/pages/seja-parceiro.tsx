import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Configuration } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

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
        >
          <Text fontSize={32} fontWeight={600}>
            Seja um parceiro do GPTdog
          </Text>
          <Text fontSize={20} opacity={0.6}>
            Estamos empolgados em apresentar a vocês a nossa nova plataforma
            online: GPTdog Somos uma comunidade dedicada a unir cachorros
            adoráveis e pessoas que estão ansiosas para dar amor e um lar
            acolhedor.
          </Text>
          <Text fontSize={20} opacity={0.6}>
            Sabemos que as ONGs de proteção animal são verdadeiros heróis,
            trabalhando incansavelmente para resgatar e cuidar de cachorros em
            situações difíceis. É por isso que queremos convidá-los a fazer
            parte dessa jornada conosco!
          </Text>
          <Text fontSize={20} opacity={0.6}>
            Nosso objetivo é fornecer uma plataforma intuitiva e interativa onde
            vocês, ONGs, possam exibir os cachorros disponíveis para adoção. Ao
            se juntar a nós, vocês terão a oportunidade de aumentar a
            visibilidade dos seus amigáveis peludos e conectá-los a pessoas
            maravilhosas que estão em busca de um novo membro para suas
            famílias.
          </Text>
          <Text fontSize={20} opacity={0.6}>
            O que nos diferencia é a nossa abordagem personalizada. Entendemos
            que cada cachorro tem uma personalidade única, assim como cada
            pessoa. Ao preencher os detalhes dos cachorros em nossa plataforma,
            vocês ajudarão as pessoas a encontrar o cachorro ideal para seu
            estilo de vida, rotina e preferências.
          </Text>
          <Text fontSize={20} opacity={0.6}>
            Além disso, queremos destacar a importância de uma adoção
            responsável. Nossa plataforma não apenas facilitará a conexão entre
            cachorros e seus futuros donos, mas também fornecerá orientações e
            recursos valiosos sobre cuidados, treinamento e os benefícios
            emocionais de ter um cachorro em casa.
          </Text>
          <Text fontSize={20} opacity={0.6}>
            Vamos espalhar alegria, amor e abraçar a missão de encontrar os
            lares perfeitos para cada um dos nossos amigos de quatro patas.
            Junte-se a nós para criar um impacto positivo duradouro nas vidas de
            inúmeras pessoas e cachorros.
          </Text>
          <Text fontSize={20} opacity={0.6}>
            Se você é uma ONG comprometida com o bem-estar animal e está pronta
            para embarcar nessa jornada conosco, inscreva-se agora mesmo em
            nossa plataforma e faça parte de uma comunidade que compartilha a
            mesma paixão por ajudar os cachorros a encontrar seus lares para
            sempre!
          </Text>
          <Text mt={10} fontSize={24} fontWeight={600} width="100%">
            Envie um e-mail para: gptdog@gmail.com
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
