import * as React from 'react';
import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Context } from "vm";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSeries } from '../../src/services';
import GridCardPoster from '../../src/components/cards/GridCardPoster';
import { Result } from '../../src/@types/result';

export const getStaticPaths: GetStaticPaths<{ serie: string }> = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context: Context) => {
    const order: string = 'most_view'
    const sort: string = 'desc'
    const page: number = context.params.page || '1';
    const result: Result = await getSeries(undefined, page, 48, order, sort)
    const pageTitles = "Mais Populares"
    return {
        props: {
            result: result,
            title: pageTitles
        },
        revalidate: 3600
    }
}

type Props = {
    result: Result,
    title: string
}

const List: NextPage<Props> = ({ result, title }: Props) => {
    const router = useRouter()
    
    function handlePage(event: any, value: any) {
        router.push({
            pathname: '/popular/' + value
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
                <Box sx={{pt:5}}>
                    <Container maxWidth='lg'>
                        {
                            result.totalResults == 0 && <h3>Nenhum resultado encontrado</h3>
                        }
                        {
                            result.results && 
                            <>
                                <h2>
                                    {title}
                                </h2>
                                <GridCardPoster arrayCards={result.results} ></GridCardPoster>
                                <Box sx={{display: 'flex', justifyContent: 'center'}}>
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


export default List