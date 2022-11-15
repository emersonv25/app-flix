import { Box, Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head';
import { Context } from "vm";
import { Episode } from "../../src/@types/serie";
import CardWatch from "../../src/components/cards/CardWatch";
import { getEpisodeByKey } from "../../src/services";


// site.com/serie/one-piece
export const getStaticPaths: GetStaticPaths<{ watch: string }> = async () => {
    return {
        paths: [{ params: { watch: 'one-piece-episodio-1' } }],
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
        revalidate: 60
    }
}

type Props = {
    episode: Episode
}

const Watch: NextPage<Props> = ({ episode }: Props) => {
    const isEpisode = () => {
        if (JSON.stringify(episode) === "{}" || typeof episode === "undefined") {
            return false
        } else { return true }
    }
    return (
        <Box>
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

export default Watch