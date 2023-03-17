import { Container } from "@mui/material";
import { NextPage } from "next";

const Contact: NextPage = () => {

    return (
        <Container>
            <h1> Entrar em contato </h1>
            <div>Envie um email para {process.env.NEXT_PUBLIC_WEBSITE_EMAIL}</div>
        </Container>
    )
}

export default Contact