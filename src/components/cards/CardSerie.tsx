import { Box, Card, CardContent, CardMedia, Chip, Container, Divider, Grid, Pagination, Stack, Typography } from "@mui/material";
import { Serie } from "../../@types/serie";
import CardEpisode from "./CardEpisode";


type Props = {
    serie: Serie
}
export default function CardSerie({ serie }: Props) {
    return (
        <>
            <Card sx={{ display: 'flex', borderRadius: 3 }}>
                <Container>
                    <Box sx={{ display: 'flex', pt: 3, pb: 3 }}>
                        <Box sx={{ display: 'flex', pl: 1, pr: 1, flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', md: 'start' } }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 220, height: 330 }}
                                image={serie.posterImg}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'start' } }}>
                                        <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }} component="div" variant="h5">
                                            {serie.title}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5, textAlign: { xs: 'center', md: 'start' } }} color="text.secondary" variant='subtitle2'>
                                            {serie.releasedDate}
                                        </Typography>
                                        <Grid>
                                            {serie.categories?.map((name, key) =>
                                                <Chip key={key} label={name} size="small" sx={{ m: 0.5 }} />
                                            )}
                                        </Grid>
                                        <Typography variant="subtitle1" color="text.secondary" component="div" mt={2} >
                                            {serie.description}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Box>
                        </Box>
                    </Box>

                    <Box display='flex'>
                        <Grid
                            container
                            justifyContent="flex-start"
                        >
                            {
                                serie.seasons[0].episodes.map((episode, key) =>
                                    <Grid key={key} item xs={12} sm={6} md={4}>
                                            <CardEpisode key={key} episode={episode}></CardEpisode>
                                    </Grid>
                                )
                            }
                        </Grid>

                    </Box>
                </Container>
            </Card>
        </>
    );
}