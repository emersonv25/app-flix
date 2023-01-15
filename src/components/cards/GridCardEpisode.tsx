import { Grid } from "@mui/material";
import { Episode } from "../../@types/serie";
import CardEpisode from "./CardEpisode";

type GridCardEpisodeProps = {
    arrayCards: Episode[]
}
export default function GridCardEpisode({ arrayCards }: GridCardEpisodeProps) {
    return (
        <>
            <Grid
                container
                justifyContent="flex-start"
            >
                {
                    arrayCards.map((episode, key) =>
                        <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                            <CardEpisode key={key} episode={episode}></CardEpisode>
                        </Grid>
                    )
                }

            </Grid>

        </>
    );
}