import * as React from 'react';
import { Box, Button, CircularProgress, Container, Pagination, Typography } from "@mui/material";
import CarouselCards from "../src/components/cards/CarouselCards";
import PageCards from "../src/components/cards/PageCards";
import { GetStaticProps, NextPage } from 'next';
import { getSeries } from '../src/services/api';
import Link from 'next/link';
import { Result } from '../src/@types/result';
import { useRouter } from 'next/router';


export const getStaticProps: GetStaticProps = async () => {
    const result: Result = await getSeries()

    return {
        props: {
            result: result
        },
        revalidate: 10
    }
}


type Props = {
    result: Result
}

const Home: NextPage<Props> = ({ result }: Props) => {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                <CircularProgress />
            </Box>
        )
    }
    else {
        return (
            <>
                <Box>
                    <Container maxWidth='xl'>
                        <Box sx={{ flexDirection: 'row', display: 'flex' }}>
                            <Box>
                                <h2>Populares</h2>
                            </Box>
                            <Box sx={{ display: 'flex', pl: 1 }}>
                                <Button sx={{ alignSelf: 'center' }} color='warning' size='small' component={Link} href='/browse?sort=most_view'>VER TODOS</Button>
                            </Box>
                        </Box>
                        <Box>
                            {
                                result.totalResults == 0 && <h3>Nenhum conteudo encontrado</h3>
                            }
                            {
                                result.results && <CarouselCards arrayCards={result.results} ></CarouselCards>
                            }

                        </Box>
                    </Container>
                    <Container maxWidth='xl'>
                        <Box sx={{ flexDirection: 'row', display: 'flex' }}>
                            <Box>
                                <h2>Lançamentos</h2>
                            </Box>
                            <Box sx={{ display: 'flex', pl: 1 }}>
                                <Button sx={{ alignSelf: 'center' }} color='warning' size='small' component={Link} href='/browse?sort=created_date'>VER TODOS</Button>
                            </Box>
                        </Box>
                        {
                            result.totalResults == 0 && <h3>Nenhum conteudo encontrado</h3>
                        }
                        {
                            result.results &&
                            <>
                                <PageCards arrayCards={result.results} ></PageCards>
                            </>
                        }
                    </Container>
                </Box>
            </>
        )
    }
}

export default Home