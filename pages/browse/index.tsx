import * as React from 'react';
import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import PageCards from '../../src/components/cards/PageCards';
import { Context } from "vm";
import Head from 'next/head';
import { Result } from '../../src/@types/result';
import { useRouter } from 'next/router';
import { getSeries } from '../../src/services/api';


export const getServerSideProps: GetServerSideProps = async (context: Context) => {
    const sort: string = context.query.sort || 'most_view'
    const page: number = context.query.page || '1'
    const result: Result = await getSeries(undefined, page, 15, sort)

    return {
        props: {
            result: result
        }
    }
}

type Props = {
    result: Result
}

const List: NextPage<Props> = ({ result }: Props) => {
    const router = useRouter()
    function handlePage(event: any, value: any){
        let query = router.query
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
                    <title>{`Listona - ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`}</title>
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
                                    Most Popular
                                </h2>
                                <PageCards arrayCards={result.results} ></PageCards>
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