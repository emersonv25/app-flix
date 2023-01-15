import { Box, CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Pagination, Select } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Context } from "vm";
import { Episode, Serie } from "../../src/@types/serie";
import CardEpisode from "../../src/components/cards/CardEpisode";
import CardSerie from "../../src/components/cards/CardSerie";
import GridCardEpisode from "../../src/components/cards/GridCardEpisode";
import { getSerieByKey } from "../../src/services";
import { array_chunk_episode, dynamicSort } from "../../src/utils/utils";

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
    const [currentPage, setCurrentPage] = useState(1)
    const [episodesPaged, setEpisodesPaged] = useState<Episode[][] | null>(null)
    const [perPage, setPerPage] = useState(100)
    const [order, setOrder] = useState('episodeNum')

    const handleCurrentPage = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        setCurrentPage(1)
        if (serie) {
            setEpisodesPaged(array_chunk_episode(serie.seasons[seasonNum - 1].episodes, perPage))
        }
    }, [seasonNum, perPage, order, serie])

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
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                                <FormControl size="small" sx={{ minWidth: 80 }}>
                                    <InputLabel>Exibir</InputLabel>
                                    <Select value={perPage} label="Exibir" onChange={(e) => setPerPage(Number(e.target.value))} >
                                        <MenuItem value="25">25</MenuItem>
                                        <MenuItem value="50">50</MenuItem>
                                        <MenuItem value="100">100</MenuItem>
                                        <MenuItem value="9999999999">Todos</MenuItem>
                                    </Select>
                                </FormControl>

                                {
                                    (episodesPaged && episodesPaged.length > 1) &&
                                    <Pagination count={episodesPaged.length} page={currentPage} onChange={handleCurrentPage} />

                                }
                                <FormControl size="small" sx={{ minWidth: 120 }}>
                                    <InputLabel>Ordenar</InputLabel>
                                    <Select value={order} onChange={(e) => setOrder(String(e.target.value))} label="Ordenar">
                                        <MenuItem value="episodeNum">Crescente</MenuItem>
                                        <MenuItem value="-episodeNum">Decrescente</MenuItem>
                                    </Select>
                                </FormControl>

                            </Box>
                            <Box display='flex'>
                                {
                                    episodesPaged &&
                                    <GridCardEpisode arrayCards={episodesPaged[currentPage - 1].sort(dynamicSort(order))}></GridCardEpisode>
                                }
                            </Box>
                            {
                                (episodesPaged && episodesPaged.length > 1) &&
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Pagination count={episodesPaged.length} page={currentPage} onChange={handleCurrentPage} />
                                </Box>
                            }

                        </Container>
                    </>
                }
            </Box>
        )
    }

}

export default Title