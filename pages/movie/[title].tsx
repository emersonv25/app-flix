import { Box, CircularProgress, Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Context } from "vm";
import { Movie } from "../../src/@types/movie";
import InfoFlix from "../../src/components/flix/InfoFlix";
import { getMoviesByKey } from "../../src/services";

// site.com/movie/one-piece
export const getStaticPaths: GetStaticPaths<{ title: string }> = async () => {
    return {
        paths: [{ params: { title: 'one-piece' } }],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context: Context) => {
    const key: string = context.params.title;
    let movie: Movie = {}
    movie = await getMoviesByKey(key);

    return {
        props: {
            movie: movie
        }, // will be passed to the page component as props
        revalidate: 60
    }
}

// site.com/1


type Props = {
    movie: Movie
}

const Title: NextPage<Props> = ({ movie }: Props) => {
    const isMovie = () => {
        if (JSON.stringify(movie) === "{}" || typeof movie === "undefined") {
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
                    !isMovie() &&
                    <Container>
                        <h3>Nenhum resultado encontrado</h3>
                    </Container>
                }
                {
                    isMovie() &&
                    <>
                        <Head>
                            <title>{`Assistir ${movie.title} Todos os Episódios Online`}</title>
                            <meta name='description' content={movie.description} />
                        </Head>
                        <Container sx={{ pt: '50px' }}>
                            <InfoFlix movie={movie} />
                        </Container>
                    </>

                }
            </Box>
        )
    }
}

export default Title