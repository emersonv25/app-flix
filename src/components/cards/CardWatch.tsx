import { Box, Button, ButtonGroup, Card, CardContent, Icon, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Episode } from "../../@types/serie";

type Props = {
    episode: Episode
}
export default function CardWatch({ episode }: Props) {
    const [videoUrl, setVideoUrl] = useState('')
    const [isIframe, setIsIframe] = useState(true)

    const isVideo = () => {
        if (typeof episode.episodeVideos === "undefined" || episode.episodeVideos.length == 0) {
            return false
        } else { return true }
    }

    useEffect(() => {
        if (typeof episode.episodeVideos !== 'undefined' && episode.episodeVideos.length > 0) {
            setVideoUrl(episode.episodeVideos[0].videoUrl)
            setIsIframe(episode.episodeVideos[0].isIframe)
        }
    }, [episode])


    return (
        <>
            <Card sx={{ display: 'flex', background: 'transparent', justifyContent: 'start' }} elevation={0}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 1.0 }}>
                    {
                        isVideo() &&

                        <Box sx={{ display: 'flex', height: { xs: 280, sm: 500, md: 600, lg: 700 } }}>
                            {
                                isIframe ?
                                    <iframe
                                        width='100%'
                                        height='100%'
                                        frameBorder={0}
                                        scrolling='no'
                                        allow='fullscreen'
                                        src={videoUrl} />
                                    :
                                    <video
                                        controls
                                        src={videoUrl}
                                        width='100%'
                                        height='100%'
                                    ></video>
                            }

                        </Box>
                    }
                    {
                        !isVideo() && <Box sx={{ textAlign: 'center', background: 'black' }}><h2>Vídeo indisponível</h2></Box>
                    }

                    {
                        <Box sx={{ textAlign: 'center', background: 'black' }}>
                            <ButtonGroup variant='text'>
                                {episode.episodeVideos && episode.episodeVideos.map((episodeVideo, index) => <Button sx={{ margin: 1 }} variant="contained" size="small" color='primary' onClick={() => { setVideoUrl(episodeVideo.videoUrl); setIsIframe(episodeVideo.isIframe) }} key={index}> {episodeVideo.optionName ? episodeVideo.optionName : 'Player ' + index + 1}</Button>)}
                                <IconButton sx={{ color: 'white' }} title="Episódio Anterior" component={Link} href={`/watch/${episode.previousEpisodeKey}`} disabled={episode.previousEpisodeKey == null}><Icon fontSize="large">skip_previous</Icon></IconButton>
                                <IconButton sx={{ color: 'white' }} title='Todos os Episódios' component={Link} href={`/serie/${episode.serieKey}`}><Icon fontSize="large">list</Icon></IconButton>
                                <IconButton sx={{ color: 'white' }} title='Próximo Episódio' component={Link} href={`/watch/${episode.nextEpisodeKey}`} disabled={episode.nextEpisodeKey == null}><Icon fontSize="large">skip_next</Icon></IconButton>
                            </ButtonGroup>
                        </Box>
                    }

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