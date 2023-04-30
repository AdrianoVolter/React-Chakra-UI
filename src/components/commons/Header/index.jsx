import { Flex, Heading, Text, Image } from "@chakra-ui/react"

export function Header () {
  return (
    <Flex p='5' align='center' gap='3'>
       <Image src="public/icon.svg" color='gray.500' alt="Logo" />
       <Flex direction="column"> 
          <Heading>blob.g</Heading>
          <Text>Noticias do mundo dos codigos</Text>
        </Flex>
    </Flex>
  )
}