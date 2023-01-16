import { Box, CircularProgress, Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head';
import { useRouter } from "next/router";
import { Context } from "vm";
import { Episode } from "../../src/@types/serie";
import CardWatch from "../../src/components/cards/CardWatch";
import { getEpisodeByKey } from "../../src/services";

export const getStaticPaths: GetStaticPaths<{ serie: string }> = async () => {
    return {
        paths: [],
        fallback: true,
    };
};
export const getStaticProps: GetStaticProps = async (context: Context) => {
    const key: string = context.params.watch;
    const episode = await getEpisodeByKey(key);
    return {
        props: {
            episode: episode
        },
        revalidate: 1000
    }
}

type Props = {
    episode: Episode
}

const Watch: NextPage<Props> = ({ episode }: Props) => {
    const router = useRouter()
    const isEpisode = () => {
        if (JSON.stringify(episode) === "{}" || typeof episode === "undefined") {
            return false
        } else { return true }
    }

    if (router.isFallback) {
        return (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt:10 }}>
                    <CircularProgress />
                </Box>
        )
    }
    else {
        return (
            <Box>
                {
                    !isEpisode() &&
                    <Container>
                        <h2>Episódio não encontrado</h2>
                    </Container>
                }
                {
                    isEpisode() &&
                    <>
                        <Head>
                            <title>{`Assistir ${episode.title}`}</title>
                            <meta name='description' content={episode.description} />
                        </Head>

                        <CardWatch episode={episode} />
                    </>
                }
            </Box>

        )
    }

}

export default Watch