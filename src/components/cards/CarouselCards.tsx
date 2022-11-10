import { Swiper, SwiperSlide } from 'swiper/react';
import { Movie } from '../../@types/movie';
import CardPoster from './CardPoster';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type CarouselCardsProps = {
    arrayCards: Movie[]
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
                        <CardPoster movie={card}></CardPoster>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}

//xs={6} sm={4} md={3} lg={2}
const swiperBreakPoints = {
    //xl
    1536:{
        slidesPerView: 6
    },
    //lg
    1200: {
        slidesPerView: 4,
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