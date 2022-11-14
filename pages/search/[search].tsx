import * as React from 'react';
import { Box, Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Serie } from '../../src/@types/serie';
import { getSeriesByName } from '../../src/services';
import PageCards from '../../src/components/cards/PageCards';
import { Context } from "vm";

// site.com/searc/one piece
export const getStaticPaths: GetStaticPaths<{ search: string }> = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context: Context) => {
    const search: string = context.params.search;
    const series = await getSeriesByName(search) || []

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

const Search: NextPage<Props> = ({ series }: Props) => {
    const resultLength = series?.length || 0

    return (
        <>
            <Box>
                <Container maxWidth='xl'>
                    <h2>Resultados</h2>
                    {
                        resultLength == 0 && <h3>Nenhum conteudo encontrado</h3>
                    }
                    {
                        resultLength > 0 && <PageCards arrayCards={series} ></PageCards>
                    }
                </Container>
            </Box>
        </>
    )
}


export default Search