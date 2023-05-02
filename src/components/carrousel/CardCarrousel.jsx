import { SwiperSlide } from 'swiper/react';
import { Slider } from '../commons/Slider/Slider';
import { Card } from '../card/Card';
import { Center } from '@chakra-ui/react';


export function CardSlider({ cards}) {

    if (cards.length === 1){
        return (
            <Center>
                <Card cards={cards[0]} />
            </Center>
        )
    }

    const settings = {
        spaceBetween: 50,
        slidesPerView: cards.length < 3 ? cards.length : 3,
        navigation: cards.length >= 3 ,
        pagination: cards.length >= 3 && { clickable: true },
        
        loop: cards.length >= 3 && true,

    }

    return (
        <Slider settings={settings}>
            {cards.map((cards) => (
                <SwiperSlide  key={cards.title}>
                    <Card
                        cards={cards}
                    />
                </SwiperSlide>
            ))}

        </Slider>
    )
}