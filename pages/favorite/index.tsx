import * as React from 'react';
import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { NextPage } from 'next';
import GridCardPoster from '../../src/components/cards/GridCardPoster';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useFavorite } from '../../src/hooks/useFavorite';


const Favorite: NextPage = () => {
    const router = useRouter()
    const query = router.query
    const sort = query.sort as string || 'title'
    const currentPage = query.page as string || 1

    const { favoritesKey, favoritesResult, getfavoritesResult } = useFavorite();

    React.useEffect(() => {
        getfavoritesResult(currentPage as number, 24, sort)
        console.log(favoritesResult)
    }, [favoritesKey])

    const title = "Seus Favoritos"
    function handlePage(event: any, value: any) {
        const query = router.query
        query.page = value
        router.replace({
            query: query
        })
    }
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
                <Head>
                    <title>{`${title} - ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`}</title>
                </Head>
                <Box>
                    <Container maxWidth='xl'>

                        <h2>Meus Favoritos</h2>

                        {
                            favoritesResult === null || (JSON.stringify(favoritesResult) === '{}') && <h3>Você não possui nada adicionado aos seus favoritos</h3>
                        }
                        {
                            favoritesResult?.results &&
                            <>
                                <GridCardPoster arrayCards={favoritesResult.results} ></GridCardPoster>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Pagination count={favoritesResult.totalPages} page={favoritesResult.currentPage} onChange={handlePage} />
                                </Box>
                            </>
                        }
                    </Container>
                </Box>
            </>
        )
    }
}


export default Favorite