import { Box, CircularProgress, Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Context } from "vm";
import { Serie } from "../../src/@types/serie";
import CardSerie from "../../src/components/cards/CardSerie";
import { getSeriesByKey } from "../../src/services";

// site.com/serie/one-piece
export const getStaticPaths: GetStaticPaths<{ title: string }> = async () => {
    return {
        paths: [{ params: { title: 'one-piece' } }],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context: Context) => {
    const key: string = context.params.title;
    const serie = await getSeriesByKey(key);

    return {
        props: {
            serie: serie
        },
        revalidate: 60
    }
}

type Props = {
    serie: Serie
}

const Title: NextPage<Props> = ({ serie }: Props) => {
    const isSerie = () => {
        if (JSON.stringify(serie) === "{}" || typeof serie === "undefined") {
            return false
        } else { return true }
    }
    const router = useRouter()

    if (router.isFallback) {
        return <>
            <Container maxWidth='xs'>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <CircularProgress />
                </Box>
            </Container>
        </>
    }
    else {
        return (
            <Box>
                {
                    !isSerie() &&
                    <Container>
                        <h3>Nenhum resultado encontrado</h3>
                    </Container>
                }
                {
                    isSerie() &&
                    <>
                        <Head>
                            <title>{`Assistir ${serie.title} Todos os Episódios Online`}</title>
                            <meta name='description' content={serie.description} />
                        </Head>
                        
                        <Container sx={{ pt: '35px' }}>
                            <CardSerie serie={serie} />
                        </Container>
                    </>

                }
            </Box>
        )
    }
}

export default Title