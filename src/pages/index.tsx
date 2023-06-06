import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { DogInput } from "@/components/Input";
import { ChatGpt } from "@/components/ChatGpt";
import { ChatUser } from "@/components/ChatUser";
import { Header } from "@/components/Header";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { FiSend } from "react-icons/fi";
import { ChatGptImage } from "@/components/ChatGptImage";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

interface iMessages {
  type: string;
  from: string;
  message: any;
}

export default function Home() {
  const [messages, setMessages] = useState<iMessages[]>([]);
  const [input, setInput] = useState("");

  const handleRequest = async () => {
    const sendedMessage = { type: "text", from: "user", message: input };
    setInput("");

    const completion: any = await openai.createCompletion({
      model: "text-davinci-002",
      // model: "text-babbage-001",
      prompt: generatePrompt(input),
      temperature: 0.6,
    });

    const teste = {
      text: "\n\n2. Lindinha",
      index: 0,
      logprobs: null,
      finish_reason: "stop",
    };

    const findDog = dogs.find((dog) =>
      completion?.data?.choices?.[0].text.includes(String(dog.id))
    );
    const gptMessage = { type: "image", from: "gpt", message: findDog };

    setMessages((oldValue) => [...oldValue, sendedMessage, gptMessage]);
  };

  console.log(messages);
  return (
    <>
      <Head>
        <title>GPTdog</title>
      </Head>
      <Flex minH="100vh" bg="gray.900" flexDir="column" alignItems="center">
        <Header />
        <Flex
          flexDir="column"
          gap={6}
          w="100%"
          maxW="1440px"
          h="80vh"
          p={8}
          overflowY={"auto"}
        >
          <ChatGpt message="Para iniciar sua busca, digite informações que você busca. EAx: Me chamo João e estou buscando um cachorro animado, brincalhão, pequeno e etc" />
          {messages.map((message, index) =>
            message.from === "gpt" ? (
              <ChatGptImage key={index} message={message.message} />
            ) : (
              <ChatUser key={index} message={message.message} />
            )
          )}
        </Flex>
        <Flex p={4} w="full" justifyContent="center" gap={2}>
          <DogInput
            onChange={({ target }) => setInput(target.value)}
            value={input}
          />
          <IconButton
            flex="none"
            aria-label="enviar"
            colorScheme="pink"
            icon={<FiSend />}
            size="lg"
            variant={"outline"}
            borderRadius={20}
            w={16}
            h={16}
            onClick={handleRequest}
          />
        </Flex>
      </Flex>
    </>
  );
}

function generatePrompt(texto: string) {
  return `Com base nesta lista de cachorros ${JSON.stringify(
    dogs
  )} qual cachorro atende mais a seguinte pesquisa(responda somente o id do cachorro)?
  ${texto}
  `;
}

const dogs = [
  {
    id: 1,
    nome: "Lindinha",
    idade: "3 meses",
    cidade: "rio grande",
    descricao: "muito animado, agitada, pequeno porte, carinhoso",
    ong: "Anjos Protetores dos Animais",
    ongLink: "https://www.instagram.com/anjosprotetores2021/",
    image:
      "https://www.petelegante.com.br/media/dicas/ado%C3%A7%C3%A3o-de-cachorro-filhote.jpg",
  },
  {
    id: 2,
    nome: "Thor",
    idade: "12 meses",
    cidade: "rio de janeiro",
    ong: "Anjos Protetores dos Animais",
    ongLink: "https://www.instagram.com/anjosprotetores2021/",
    descricao: "agitado, porte medio, carinhoso, forte",
    image:
      "https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png",
  },
  {
    id: 3,
    nome: "Magali",
    idade: "3 anos",
    cidade: "rio de janeiro",
    ong: "Anjos Protetores dos Animais",
    ongLink: "https://www.instagram.com/anjosprotetores2021/",
    descricao: "porte grande, possui irmãos",
    image:
      "https://www.tuaradio.com.br/intranet/userfiles/noticias/e72389794c95dad52075d6a03992798b.jpg",
  },
];
