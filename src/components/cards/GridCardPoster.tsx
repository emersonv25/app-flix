import { Grid } from "@mui/material";
import { Serie } from "../../@types/serie";
import CardPoster from "./CardPoster";

type GridCardPosterProps = {
    arrayCards: Serie[]
}
export default function GridCardPoster({ arrayCards }: GridCardPosterProps) {
    return (
        <>
            <Grid
                container
                justifyContent="flex-start"
            >
                {arrayCards.map((card, key) =>
                    <Grid key={key} item xs={6} sm={4} md={3} lg={2} xl={2}>
                        <CardPoster key={key} serie={card}></CardPoster>
                    </Grid>
                )}
            </Grid>

        </>
    );
}