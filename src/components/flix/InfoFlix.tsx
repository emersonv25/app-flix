import { Box, Card, CardContent, CardMedia, Chip, Container, Divider, Grid, Pagination, Stack, Typography } from "@mui/material";
import { Movie } from "../../@types/movie";


type Props = {
    movie: Movie
}
export default function InfoFlix({ movie }: Props) {
    return (
        <>
            <Card sx={{ display: 'flex', borderRadius: 3 }}>
                <Container>
                    <Box sx={{ display: 'flex', flexDirection: 'column', pt: 3 }}>
                        <Box sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 220, height: 330, borderRadius: 3 }}
                                image={movie.posterImg}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {movie.title}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary" variant='subtitle2'>
                                        {movie.releasedDate}
                                    </Typography>
                                    <Grid>
                                        {movie.categories?.map((name, key) =>
                                            <Chip key={key} label={name} size="small" sx={{ m: 0.5 }} />
                                        )}
                                    </Grid>
                                    <Typography variant="subtitle1" color="text.secondary" component="div" mt={2} sx={{display: { xs: 'none', sm: 'flex' }}}>
                                        {movie.description}
                                    </Typography>
                                </CardContent>

                            </Box>
                        </Box>

                        <Divider sx={{ p: 1 }}></Divider>

                        <Box sx={{ display: {xs: 'flex', sm: 'none'}, pl: 1, pr: 1 }} >
                            <Typography variant="subtitle1" color="text.secondary" component="div" mt={2}>
                                {movie.description}
                            </Typography>
                        </Box>
                    </Box>
                </Container>

            </Card>
        </>
    );
}