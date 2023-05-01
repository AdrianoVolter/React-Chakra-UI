import { Header } from "./components/commons/Header"
import { HorizontalCard } from "./components/card/HorizontalCard"
import { Center } from "@chakra-ui/react"
import { horizontal_cards, cards} from "./components-mock.json"
import { Card } from "./components/card/Card"
import { VStack } from "@chakra-ui/react"


function App() {
  
  return (
    <>
      <Header />
      <Center >
        <VStack spacing="64px" marginY="64px">
           {horizontal_cards.map((card) => (
         <HorizontalCard 
          key={card.id} 
          card={card} 
        />
        ))}
      {cards.map((cards) => (
        <Card
          key={cards.id}
          cards={cards}
        />
      ))}
        </VStack>
      
      </Center>
      
    </>
  )
}

export default App
