import * as React from 'react';
import { Box, Container } from "@mui/material";
import { Movie } from '../src/@types/movie';
import CarouselCards from "../src/components/cards/CarouselCards";
import PageCards from "../src/components/cards/PageCards";
import { GetStaticProps, NextPage } from 'next';
import { getMovies } from '../src/services/api';


export const getStaticProps: GetStaticProps = async () => {
    const movies : Movie[] = await getMovies()

    return {
        props: {
            movies: movies
        },
        revalidate: 10
    }
}


type Props = {
    movies: Movie[]
}

const Home: NextPage<Props> = ({movies} : Props) => {
    return (
        <>
            <Box>
                <Container maxWidth='xl'>
                    <h2>Melhores</h2>
                    <Box>
                        {
                            movies.length == 0 && <h3>Nenhum conteudo encontrado</h3>
                        }
                        {
                            movies && <CarouselCards arrayCards={movies} ></CarouselCards>
                        }

                    </Box>
                </Container>
                <Container maxWidth='xl'>
                    <h2>Lançamentos</h2>
                    {
                        movies.length == 0 && <h3>Nenhum conteudo encontrado</h3>
                    }
                    {
                        movies && <PageCards arrayCards={movies} ></PageCards>
                    }
                </Container>
            </Box>
        </>
    )
}

export default Home