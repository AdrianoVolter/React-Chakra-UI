import { Header } from "./components/commons/Header"
import { HorizontalCard } from "./components/card/HorizontalCard"
import { Center } from "@chakra-ui/react"
import { horizontal_cards} from "./components-mock.json"


function App() {
  
  return (
    <>
      <Header />
      <Center >
       {horizontal_cards.map((card) => (
         <HorizontalCard 
          key={card.id} 
          card={card} 
        />
        ))}
      </Center>
      
    </>
  )
}

export default App
