import { Header } from "./components/commons/Header"
import { VerticalCard } from "./components/card/VerticalCard"
import { Center } from "@chakra-ui/react"
import { vertical_cards} from "./components-mock.json"


function App() {
  
  return (
    <>
      <Header />
      <Center >
       {vertical_cards.map((card) => (
         <VerticalCard 
          key={card.id} 
          card={card} 
        />
        ))}
      </Center>
      
    </>
  )
}

export default App
