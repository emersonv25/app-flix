import { Box, Card, CardContent, Container, Divider, Typography } from "@mui/material";
import { Episode } from "../../@types/serie";
import { CardMedia } from '@mui/material';

type Props = {
    episode: Episode
}
export default function CardWatch({ episode }: Props) {
    return (
        <>
            <Card sx={{ display: 'flex', background: 'transparent', justifyContent: 'start' }} elevation={0}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 1.0 }}>
                    <Box sx={{ display: 'flex', height: { xs: 280, sm: 500, md: 600, lg: 700 } }}>
                        <iframe
                            width='100%'
                            height='100%'
                            frameBorder={0}
                            scrolling='no'
                            allow='fullscreen'
                            src={episode.episodeVideo} />
                    </Box>
                    <Box>
                        <CardContent>
                            <Typography sx={{ textAlign: 'start' }} component="div" variant="h5">
                                {episode.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div" mt={2} >
                                {episode.description}
                            </Typography>
                        </CardContent>
                    </Box>
                </Box>
            </Card>
        </>
    );
}