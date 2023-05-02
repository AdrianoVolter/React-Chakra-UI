import { Header } from "./components/commons/Header"
import { HorizontalCard } from "./components/card/HorizontalCard"
import { horizontal_cards, cards, cards_carrousel} from "./components-mock.json"
import { Card } from "./components/card/Card"
import { VStack, Box ,Center } from "@chakra-ui/react"
import { Slider } from "./components/commons/Slider/Slider"
import { SwiperSlide } from "swiper/react"
import { CardSlider } from "./components/carrousel/CardCarrousel"


function App() {

 
  
  return (
    <>
      <Header />
      <Center >
        <Box maxW="1280px">
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
        {cards_carrousel && <CardSlider cards={cards_carrousel} />
        }
        </Box>
      </Center>
    
    </>
  )
}

export default App
