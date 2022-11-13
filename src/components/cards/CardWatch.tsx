import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Episode } from "../../@types/serie";
import { CardMedia } from '@mui/material';

type Props = {
    episode: Episode
}
export default function CardWatch({ episode }: Props) {
    return (
        <>
            <Card sx={{ display: 'flex', background: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} elevation={0}>
                <Container>
                    <Box sx={{ display: 'flex', width: 1.0, height: { xs: 250, sm: 400, md: 500, lg: 600 } }}>
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
                </Container>

            </Card>
        </>
    );
}