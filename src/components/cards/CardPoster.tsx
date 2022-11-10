import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Movie } from '../../@types/movie';
import Link from 'next/link';
import Image from 'next/image'

type Props = {
    movie: Movie
}

const CardPoster = ({ movie }: Props) => {
    return (
        <Card sx={{ display: 'flex', margin: 1, maxWidth: 260, borderRadius: 4 }} elevation={0}>
            <CardActionArea component={Link} href={`movie/${movie.movieKey}`}>
                <CardMedia
                    component="img"
                    sx={{ width: 1.0, height: 1.0 }}
                    image={`${movie.posterImg}`}
                />
                <CardContent sx={{ maxHeight: 40, padding: 1 }}>
                    <Typography gutterBottom variant="subtitle1" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' align="left">
                        {movie.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardPoster;