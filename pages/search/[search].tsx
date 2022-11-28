import * as React from 'react';
import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import PageCards from '../../src/components/cards/PageCards';
import { Context } from "vm";
import Head from 'next/head';
import { Result } from '../../src/@types/result';
import { useRouter } from 'next/router';
import { getSeries } from '../../src/services/api';

// site.com/searc/one piece
export const getStaticPaths: GetStaticPaths<{ search: string }> = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context: Context) => {
    const search: string = context.params.search;
    const result: Result = await getSeries(search)

    return {
        props: {
            result: result,
            search: search
        },
        revalidate: 10
    }
}

type Props = {
    result: Result
    search: string
}

const Search: NextPage<Props> = ({ result, search }: Props) => {
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
                <Head>
                    <title>{`Você pesquisou por ${search} - ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`}</title>
                </Head>
                <Box>
                    <Container maxWidth='xl'>
                        <h2>Resultados para {search}</h2>
                        {
                            result.totalResults == 0 && <h3>Nenhum resultado encontrado</h3>
                        }
                        {
                            result.results && 
                            <>
                                <PageCards arrayCards={result.results} ></PageCards>
                                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                    <Pagination count={result.totalPages} page={result.currentPage} />
                                </Box>
                            </>
                            

                        }
                    </Container>
                </Box>
            </>
        )
    }
}


export default Search