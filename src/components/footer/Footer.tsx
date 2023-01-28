import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

export const Footer: FC = (): ReactElement => {
    return (

            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    marginTop: '1rem',
                }}
            >
                <Container maxWidth="lg">
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h6" color='white' >
                                {` ${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN?.toUpperCase()} © ${new Date().getFullYear()}`}

                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="white" variant="subtitle2">
                                {` ${process.env.NEXT_PUBLIC_WEBSITE_FOOTER_SUBTITLE1}`} <Link href='/privacity-policy' style={{ color: 'white' }}>Política de Privacidade</Link> - <Link href='/dmca' style={{ color: 'white' }}> DMCA</Link>
                            </Typography>
                            
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    );
};

export default Footer;