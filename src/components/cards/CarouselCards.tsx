import { Swiper, SwiperSlide } from 'swiper/react';
import { CardInfo } from '../../@types/cardInfo';
import CardPoster from './CardPoster';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type CarouselCardsProps = {
    arrayCards: CardInfo[]
}
export default function CarouselCards({ arrayCards }: CarouselCardsProps) {
    return (
        <>
            <Swiper

                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                breakpoints={swiperBreakPoints}
                centeredSlides={true}
                centeredSlidesBounds={true}
            >
                {arrayCards.map((card, key) =>
                    <SwiperSlide key={key}>
                        <CardPoster title={`${card.title}`} image={`${card.image}`}></CardPoster>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}

//xs={6} sm={4} md={3} lg={2}
const swiperBreakPoints = {
    //lg
    1200: {
        slidesPerView: 6,
    },
    //md
    900: {
        slidesPerView: 4,
    },
    //sm
    600: {
        slidesPerView: 3,
    },
    0: {
        slidesPerView: 2,
    }

}