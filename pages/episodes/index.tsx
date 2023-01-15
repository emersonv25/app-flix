import * as React from 'react';
import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { GetServerSideProps, NextPage } from 'next';
import { Context } from "vm";
import Head from 'next/head';
import { Result } from '../../src/@types/result';
import { useRouter } from 'next/router';
import { getLastEpisodes } from '../../src/services/api';
import GridCardEpisode from '../../src/components/cards/GridCardEpisode';


export const getServerSideProps: GetServerSideProps = async (context: Context) => {
    const page: number = context.query.page || '1'
    const result: Result = await getLastEpisodes(page, 24)
    return {
        props: {
            result: result,
            title: "Ultimos Episódios Lançados"
        }
    }
}

type Props = {
    result: Result,
    title: string
}

const EpisodesPage: NextPage<Props> = ({ result, title }: Props) => {
    const router = useRouter()

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
                <Box sx={{ pt: 5 }}>
                    <Container maxWidth='lg'>
                        <h2>{title}</h2>
                        {
                            result.totalResults == 0 && <h3>Nenhum resultado encontrado</h3>
                        }
                        {
                            result.results &&
                            <>

                                <GridCardEpisode arrayCards={result.results}></GridCardEpisode>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Pagination count={result.totalPages} page={result.currentPage} onChange={handlePage} />
                                </Box>
                            </>
                        }
                    </Container>
                </Box>
            </>
        )
    }
}


export default EpisodesPage