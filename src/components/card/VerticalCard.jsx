import { Flex , Image, VStack , Text, Heading} from "@chakra-ui/react";
import { custonScrollbar } from "../../styles/styles";


export function VerticalCard ({card}){

    return (
        <Flex
            maxW="850px"
            maxH="400px"
            borderRadius="8px"
            bgColor="gray.100"
            
        >
            <Image 
                src={card.image.url} 
                alt={card.image.alt} 
                maxW={["200px","300px","400px"]} 
                maxH={["200px","300px","400px"]} 
                objectFit="cover"
                borderLeftRadius="8px"
                />
            <VStack
                align="flex-start"
                p="16px"
                spacing="16px"
                maxW="350px"
                minW="200px"
                h={["200px","300px","400px"]}
            >
                <Text variant="subtitle">{card.published_date}</Text>
                <Heading size="lg">{card.title}</Heading>
                <Text overflow="auto" css={custonScrollbar}>{card.content}</Text>
            </VStack>
        </Flex>
    )
}