import * as React from 'react';
import { Box, Container } from "@mui/material";
import { Serie } from '../src/@types/serie';
import CarouselCards from "../src/components/cards/CarouselCards";
import PageCards from "../src/components/cards/PageCards";
import { GetStaticProps, NextPage } from 'next';
import { getSeries } from '../src/services/api';


export const getStaticProps: GetStaticProps = async () => {
    const series : Serie[] = await getSeries()

    return {
        props: {
            series: series
        },
        revalidate: 10
    }
}


type Props = {
    series: Serie[]
}

const Home: NextPage<Props> = ({series} : Props) => {
    return (
        <>
            <Box>
                <Container maxWidth='xl'>
                    <h2>Melhores</h2>
                    <Box>
                        {
                            series.length == 0 && <h3>Nenhum conteudo encontrado</h3>
                        }
                        {
                            series && <CarouselCards arrayCards={series} ></CarouselCards>
                        }

                    </Box>
                </Container>
                <Container maxWidth='xl'>
                    <h2>Lançamentos</h2>
                    {
                        series.length == 0 && <h3>Nenhum conteudo encontrado</h3>
                    }
                    {
                        series && <PageCards arrayCards={series} ></PageCards>
                    }
                </Container>
            </Box>
        </>
    )
}

export default Home