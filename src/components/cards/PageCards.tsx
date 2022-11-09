import { Box, Grid, Pagination } from "@mui/material";
import { CardInfo } from "../../@types/cardInfo";
import CardPoster from "./CardPoster";

type PageCardsProps = {
    arrayCards: CardInfo[]
}
export default function PageCards({ arrayCards }: PageCardsProps) {
    return (
        <>
            <Grid
                container
                justifyContent="flex-start"
            >
                {arrayCards.map((card, key) =>
                    <Grid key={key} item xs={6} sm={4} md={3} lg={2}>
                        <CardPoster key={key} title={`${card.title}`} image={`${card.image}`}></CardPoster>
                    </Grid>
                )}
            </Grid>
            <Box display='flex' justifyContent="center" pt={1} pb={1}>
                <Pagination count={100} color="primary" />
            </Box>
        </>
    );
}