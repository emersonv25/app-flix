import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Serie } from '../../@types/serie';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    serie: Serie
}

const CardPoster = ({ serie }: Props) => {
    console
    return (
        <Card sx={{ display: 'flex', margin: 1, maxWidth: 200, maxHeight: 340, borderRadius: 2, background: 'transparent' }} elevation={0}>
            <CardActionArea component={Link} href={`/serie/${serie.serieKey}`}>
                <CardMedia
                    sx={{ width: 1.0, maxHeight: 300 }}
                >
                    <Image src={`${serie.posterImg}`} width="0" height="0" sizes="100vw" style={{ width: '100%', height: 'auto' }} alt={serie.title || ''} />

                </CardMedia>
                <CardContent sx={{ height: 50, padding: 1 }}>
                    <Typography gutterBottom variant="subtitle1" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' align="left">
                        {serie.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardPoster;