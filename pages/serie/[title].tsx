import { Box, Container, Grid } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Context } from "vm";
import { Serie } from "../../src/@types/serie";
import CardEpisode from "../../src/components/cards/CardEpisode";
import CardSerie from "../../src/components/cards/CardSerie";
import { getSerieByKey } from "../../src/services";

// site.com/serie/one-piece
export const getStaticPaths: GetStaticPaths<{ title: string }> = async () => {
    return {
        paths: [{ params: { title: 'one-piece' } }],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context: Context) => {
    const key: string = context.params.title;
    const serie = await getSerieByKey(key);

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

                        <Box display='flex'>
                            <Grid
                                container
                                justifyContent="flex-start"
                            >
                                {
                                    serie.seasons[0].episodes.map((episode, key) =>
                                        <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                                            <CardEpisode key={key} episode={episode}></CardEpisode>
                                        </Grid>
                                    )
                                }

                            </Grid>
                        </Box>
                    </Container>
                </>
            }
        </Box>
    )

}

export default Title