import { Box, ButtonGroup, Card, CardContent, Icon, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { Episode } from "../../@types/serie";

type Props = {
    episode: Episode
}
export default function CardWatch({ episode }: Props) {
    return (
        <>
            <Card sx={{ display: 'flex', background: 'transparent', justifyContent: 'start' }} elevation={0}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 1.0 }}>
                    <Box sx={{ display: 'flex', height: { xs: 280, sm: 500, md: 600, lg: 700 }}}>
                        <iframe
                            width='100%'
                            height='100%'
                            frameBorder={0}
                            scrolling='no'
                            allow='fullscreen'
                            src={episode.episodeVideo} />
                    </Box>

                    <Box sx={{textAlign: 'center', background: 'black'}}>
                        <ButtonGroup variant='text' color='inherit'>
                            <IconButton title="Episódio Anterior" component={Link} href={`/watch/${episode.previousEpisodeKey}`} disabled={episode.previousEpisodeKey == null}><Icon fontSize="large">skip_previous</Icon></IconButton>
                            <IconButton title='Todos os Episódios' component={Link} href={`/serie/${episode.serieKey}`}><Icon fontSize="large">list</Icon></IconButton>
                            <IconButton title='Próximo Episódio' component={Link} href={`/watch/${episode.nextEpisodeKey}`} disabled={episode.nextEpisodeKey == null}><Icon fontSize="large">skip_next</Icon></IconButton>
                        </ButtonGroup>
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