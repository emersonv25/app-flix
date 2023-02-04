import * as React from 'react';
import { Box, Button, CircularProgress, Container, Typography } from "@mui/material";
import CarouselCards from "../src/components/cards/CarouselCards";
import { GetStaticProps, NextPage } from 'next';
import { getLastEpisodes, getSeries } from '../src/services/api';
import Link from 'next/link';
import { Result } from '../src/@types/result';
import { useRouter } from 'next/router';
import { useFavorite } from '../src/hooks/useFavorite';
import GridCardEpisode from '../src/components/cards/GridCardEpisode';


export const getStaticProps: GetStaticProps = async () => {
    const resultLatestRelease: Result = await getSeries(undefined, 1, 15, 'created_date', 'desc');
    const resultMostView: Result = await getSeries(undefined, 1, 15, 'most_view', 'desc');
    const resultEpisodes: Result = await getLastEpisodes(1, 24)
    return {
        props: {
            resultLatestRelease: resultLatestRelease,
            resultMostView: resultMostView,
            resultEpisodes: resultEpisodes
        },
        revalidate: 240
    }
}

type Props = {
    resultLatestRelease: Result,
    resultMostView: Result,
    resultEpisodes: Result
}

const Home: NextPage<Props> = ({ resultMostView, resultLatestRelease, resultEpisodes }: Props) => {
    const { favoritesKey, favoritesResult, getfavoritesResult } = useFavorite();
    const router = useRouter()
    React.useEffect(() => {
        getfavoritesResult()
    }, [favoritesKey])

    if (router.isFallback) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                <CircularProgress />
            </Box>
        )
    }
    else {
        return (
            <Container maxWidth='xl' sx={{ pt: '15px' }}>
                <Box>
                    {
                        favoritesResult !== null && (JSON.stringify(favoritesResult) !== '{}') && <>
                            <Box sx={{ flexDirection: 'row', display: 'flex' }}>
                                <Box sx={{ p: '10px' }}>
                                    <Typography variant="h5" component={Link} href='/favorite' sx={{ textDecoration: "none", boxShadow: "none", fontWeight: 'bold' }} color='inherit'>Meus Favoritos</Typography>
                                </Box>
                                <Box sx={{ alignSelf: 'center', borderRadius: '9px' }}>
                                    <Button color='primary' size='small' component={Link} href='/favorite'>VER TODOS</Button>
                                </Box>
                            </Box>
                            <Box>
                                {
                                    favoritesResult.results && <CarouselCards arrayCards={favoritesResult.results} ></CarouselCards>
                                }

                            </Box>
                        </>

                    }
                    <>
                        <Box sx={{ flexDirection: 'row', display: 'flex' }}>
                            <Box sx={{ p: '10px' }}>
                                <Typography variant="h5" component={Link} href='/popular/1' sx={{ textDecoration: "none", boxShadow: "none", fontWeight: 'bold'}} color='inherit'>Populares</Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Button sx={{ alignSelf: 'center', borderRadius: '9px' }} color='primary' size='small' component={Link} href='/popular/1'>VER TODOS</Button>
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
                    </>
                    <>
                        <Box sx={{ flexDirection: 'row', display: 'flex' }}>
                            <Box sx={{ p: '10px' }}>
                                <Typography variant="h5" component={Link} href='/releases/1' sx={{ textDecoration: "none", boxShadow: "none", fontWeight: 'bold' }} color='inherit'>Lançamentos</Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Button sx={{ alignSelf: 'center', borderRadius: '9px' }} color='primary' size='small' component={Link} href='/releases/1'>VER TODOS</Button>
                            </Box>
                        </Box>
                        {
                            resultLatestRelease.totalResults == 0 && <h3>Nenhum conteudo encontrado</h3>
                        }
                        {
                            resultLatestRelease.results &&
                            <>
                                <CarouselCards arrayCards={resultLatestRelease.results} ></CarouselCards>
                            </>
                        }
                    </>
                    <>
                        <Box sx={{ flexDirection: 'row', display: 'flex' }}>
                            <Box sx={{ p: '10px' }}>
                                <Typography variant="h5" component={Link} href='/episodes/1' sx={{ textDecoration: "none", boxShadow: "none", fontWeight: 'bold' }} color='inherit'>Novos Episódios</Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Button sx={{ alignSelf: 'center', borderRadius: '9px' }} color='primary' size='small' component={Link} href='/episodes/1'>VER TODOS</Button>
                            </Box>
                        </Box>
                        {
                            resultEpisodes.totalResults == 0 && <h3>Nenhum conteudo encontrado</h3>
                        }
                        {
                            resultEpisodes.results &&
                            <>
                                <Box display='flex'>
                                    <GridCardEpisode arrayCards={resultEpisodes.results}></GridCardEpisode>
                                </Box>
                            </>
                        }
                    </>
                </Box>
            </Container>
        )
    }
}

export default Home