import { Box, CircularProgress, Container, Grid, MenuItem, Select } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Context } from "vm";
import { Serie } from "../../src/@types/serie";
import CardEpisode from "../../src/components/cards/CardEpisode";
import CardSerie from "../../src/components/cards/CardSerie";
import { getSerieByKey } from "../../src/services";

// site.com/serie/one-piece
export const getStaticPaths: GetStaticPaths<{ serie: string }> = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context: Context) => {
    const key: string = context.params.serie;
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
    const [seasonNum, setSeasonNum] = useState(1)

    const isSerie = () => {
        if (JSON.stringify(serie) === "{}" || typeof serie === "undefined") {
            return false
        } else { return true }
    }

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
            <Box>
                {
                    !isSerie() &&
                    <Container>
                        <h3>Série não encontrada</h3>
                    </Container>
                }
                {
                    isSerie() &&
                    <>
                        <Head>
                            <title>{`Assistir ${serie.title} Todos os Episódios Online`}</title>
                            <meta name='description' content={serie.description} />
                        </Head>

                        <Container sx={{ pt: '35px', pb: '50px' }}>
                            <CardSerie serie={serie} />

                            <Box pt={3} pb={3} sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Box>
                                    <h2>Episódios</h2>
                                </Box>
                                <Box sx={{ marginLeft: 'auto' }}>
                                    <Select value={seasonNum} onChange={(e) => setSeasonNum(Number(e.target.value))} sx={{ width: 200 }} disabled={serie.seasons.length <= 1}>
                                        {
                                            serie.seasons.map((season, key) =>
                                                <MenuItem value={season.seasonNum} key={key}> Temporada {season.seasonNum}</MenuItem>
                                            )
                                        }

                                    </Select>
                                </Box>
                            </Box>

                            <Box display='flex'>
                                <Grid
                                    container
                                    justifyContent="flex-start"
                                >
                                    {
                                        serie.seasons[seasonNum - 1].episodes.map((episode, key) =>
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

}

export default Title