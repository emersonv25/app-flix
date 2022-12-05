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
    const resultLatestRelease: Result = await getSeries(undefined, 1, 15, 'latest_release');
    const resultMostView: Result = await getSeries(undefined, 1, 15, 'most_view');
    return {
        props: {
            resultLatestRelease: resultLatestRelease,
            resultMostView: resultMostView
        },
        revalidate: 10
    }
}


type Props = {
    resultLatestRelease: Result,
    resultMostView: Result
}

const Home: NextPage<Props> = ({ resultMostView, resultLatestRelease }: Props) => {
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
                                resultMostView.totalResults == 0 && <h3>Nenhum conteudo encontrado</h3>
                            }
                            {
                                resultMostView.results && <CarouselCards arrayCards={resultMostView.results} ></CarouselCards>
                            }

                        </Box>
                    </Container>
                    <Container maxWidth='xl'>
                        <Box sx={{ flexDirection: 'row', display: 'flex' }}>
                            <Box>
                                <h2>Lançamentos</h2>
                            </Box>
                            <Box sx={{ display: 'flex', pl: 1 }}>
                                <Button sx={{ alignSelf: 'center' }} color='warning' size='small' component={Link} href='/browse?sort=latest_release'>VER TODOS</Button>
                            </Box>
                        </Box>
                        {
                            resultLatestRelease.totalResults == 0 && <h3>Nenhum conteudo encontrado</h3>
                        }
                        {
                            resultLatestRelease.results &&
                            <>
                                <PageCards arrayCards={resultLatestRelease.results} ></PageCards>
                            </>
                        }
                    </Container>
                </Box>
            </>
        )
    }
}

export default Home