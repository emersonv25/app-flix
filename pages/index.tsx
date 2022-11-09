import * as React from 'react';
import { Box, Container } from "@mui/material";
import { Movie } from '../src/@types/movie';
import CarouselCards from "../src/components/cards/CarouselCards";
import PageCards from "../src/components/cards/PageCards";
import { NextPage } from 'next';
import { getMovies } from '../src/services/api';
import { useEffect, useState } from 'react';
import { useDebounce } from '../src/hooks/useDebounce';


const Home: NextPage = () => {
    const [movieList, setMovieList] = useState<Movie[]>([])
    const {debounce} = useDebounce();

    const getMovieList = async () => {
        await getMovies().then(resp => { setMovieList(resp) }).catch(ex => { console.log(ex) })
    }

    useEffect(() => {
        debounce(() => {
            console.log('getmovielist')
            getMovieList()
        })
    }, [])

    return (
        <>
            <Box>
                <Container maxWidth='xl'>
                    <h2>Melhores</h2>
                    <Box>
                        {
                            movieList.length == 0 && <h3>Nenhum conteudo encontrado</h3>
                        }
                        {
                            movieList && <CarouselCards arrayCards={movieList} ></CarouselCards>
                        }

                    </Box>
                </Container>
                <Container maxWidth='xl'>
                    <h2>Lançamentos</h2>
                    {
                        movieList.length == 0 && <h3>Nenhum conteudo encontrado</h3>
                    }
                    {
                        movieList && <PageCards arrayCards={movieList} ></PageCards>
                    }
                </Container>
            </Box>
        </>
    )
}

export default Home