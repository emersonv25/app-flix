import * as React from 'react';
import { Box, Button, Container, Typography } from "@mui/material";
import { Serie } from '../src/@types/serie';
import CarouselCards from "../src/components/cards/CarouselCards";
import PageCards from "../src/components/cards/PageCards";
import { GetStaticProps, NextPage } from 'next';
import { getSeries } from '../src/services/api';
import Link from 'next/link';


export const getStaticProps: GetStaticProps = async () => {
    const series: Serie[] = await getSeries()

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

const Home: NextPage<Props> = ({ series }: Props) => {
    return (
        <>
            <Box>
                <Container maxWidth='xl'>
                    <Box sx={{ flexDirection: 'row', display: 'flex' }}>
                        <Box>
                            <h2>Melhores</h2>
                        </Box>
                        <Box sx={{ display: 'flex', pl: 1 }}>
                            <Button sx={{ alignSelf: 'center' }} color='warning' size='small' component={Link} href=''>VER TODOS</Button>
                        </Box>
                    </Box>
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
                    <Box sx={{ flexDirection: 'row', display: 'flex' }}>
                        <Box>
                            <h2>Novos Episódios</h2>
                        </Box>
                        <Box sx={{ display: 'flex', pl: 1 }}>
                            <Button sx={{ alignSelf: 'center' }} color='warning' size='small' component={Link} href=''>VER TODOS</Button>
                        </Box>
                    </Box>
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