import * as React from 'react';
import { Box, Container } from "@mui/material";
import { CardInfo } from '../src/@types/cardInfo';
import CarouselCards from "../src/components/cards/CarouselCards";
import PageCards from "../src/components/cards/PageCards";
import { NextPage } from 'next';

const cards: CardInfo[] =
    [
        { title: 'Attack on Titan: Shingeki No Kyojin', image: '/static/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Reptile MUITO FODA BIXO TNC', image: '/static/images/contemplative-reptile.jpg' },
        { title: 'Live from space', image: '/static/images/live-from-space.jpg' },
        { title: 'Attack on Titan', image: '/static/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Reptile', image: '/static/images/contemplative-reptile.jpg' },
        { title: 'Live from space', image: '/static/images/live-from-space.jpg' },
        { title: 'Attack on Titan', image: '/static/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Reptile MUITO FODA BIXO TNC', image: '/static/images/contemplative-reptile.jpg' },
        { title: 'Live from space', image: '/static/images/live-from-space.jpg' },
    ]

const Home: NextPage = () => {
    return (
        <>
            <Box>
                <Container maxWidth='xl'>
                    <h2>Este é um slider</h2>
                    <Box>
                        <CarouselCards arrayCards={cards} ></CarouselCards>
                    </Box>
                </Container>
                <Container maxWidth='xl'>
                    <h2>Está é uma pagina</h2>
                    <PageCards arrayCards={cards} ></PageCards>
                </Container>
            </Box>
        </>
    )
}

export default Home