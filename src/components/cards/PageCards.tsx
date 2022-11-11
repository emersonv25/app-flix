import { Box, Grid, Pagination } from "@mui/material";
import { Serie } from "../../@types/serie";
import CardPoster from "./CardPoster";

type PageCardsProps = {
    arrayCards: Serie[]
}
export default function PageCards({ arrayCards }: PageCardsProps) {
    return (
        <>
            <Grid
                container
                justifyContent="flex-start"
            >
                {arrayCards.map((card, key) =>
                    <Grid key={key} item xs={6} sm={4} md={3} xl={2}>
                        <CardPoster key={key} serie={card}></CardPoster>
                    </Grid>
                )}
            </Grid>
            <Box display='flex' justifyContent="center" pt={1} pb={1}>
                <Pagination count={100} color="primary" />
            </Box>
        </>
    );
}