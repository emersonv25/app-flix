import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Serie } from '../../@types/serie';
import Link from 'next/link';

type Props = {
    serie: Serie
}

const CardPoster = ({ serie }: Props) => {
    console
    return (
        <Card sx={{ display: 'flex', margin: 1, maxWidth: 260, maxHeight: 330, borderRadius: 4 }} elevation={0}>
            <CardActionArea component={Link} href={`serie/${serie.serieKey}`}>
                <CardMedia
                    component="img"
                    sx={{ width: 1.0, maxHeight: 300 }}
                    image={`${serie.posterImg}`}
                />
                <CardContent sx={{ height: 40, padding: 1 }}>
                    <Typography gutterBottom variant="subtitle1" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' align="left">
                        {serie.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardPoster;