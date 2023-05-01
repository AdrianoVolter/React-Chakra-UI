import { Flex, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { custonScrollbar } from "../../styles/styles";

export function Card ({cards}){

const {image, published_date, title, content} = cards

    return (
        <Flex 
            direction="column" 
            maxW="450px"
            maxH="500px"
            borderRadius="8px"
            bgColor="gray.100"
            >
            {image &&  <Image 
                src={image.url} 
                alt={image.alt}
                w="100%" 
                maxW="450px"
                h="100%"
                maxH="220px"
                objectFit="cover"
                borderTopRadius="8px"
                />}
            <VStack
                p="16px" 
                spacing="16px" 
                align="flex-start" 
                maxW="450px" 
                minW="200px"
                h="100%"
                w="100%"
                overflow="auto"
                >
                    {
                        published_date && <Text variant="subtitle">{published_date}</Text>
                    }
               
                <Heading size="lg">{title}</Heading>
                <Text overflowY="auto" css={custonScrollbar}
                >{content}</Text>
            </VStack>
        </Flex>
    )
}