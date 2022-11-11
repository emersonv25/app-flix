import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Episode } from '../../@types/serie';
import Link from 'next/link';

type Props = {
    episode: Episode
}

const CardEpisode = ({ episode }: Props) => {
    return (
        <Card sx={{ display: 'flex', margin: 1, maxWidth: 300, maxHeight: 230}} elevation={0}>
            <CardActionArea component={Link} href={`/watch/${episode.episodeKey}`}>
                <CardMedia
                    component="img"
                    sx={{ width: 1.0, maxHeight: 170}}
                    image={`https://animesbr.biz/wp-content/uploads/2021/06/tLxA678OEJIsdNPPVZkAH8U4f8L-300x170.jpg`}
                />
                <CardContent sx={{ maxHeight: 60, padding: 1 }}>
                    <Typography color="text.secondary" variant='subtitle2'>
                        Episódio {`${episode.episodeNum}`}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' align="left">
                        {episode.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardEpisode;