import { Input, InputProps } from "@chakra-ui/react";
import React from "react";
interface iDogInput extends InputProps {}
export const DogInput = ({ ...props }: iDogInput) => {
  return (
    <Input
      {...props}
      focusBorderColor="gray.100"
      borderColor="gray.500"
      color="gray.200"
      bg="gray.800"
      fontSize={20}
      h={16}
      borderRadius={20}
      paddingLeft={6}
      fontWeight={400}
      placeholder="Qual seu cachorro ideal?"
      maxW={600}
    />
  );
};
