import { Container } from "@mui/material";
import { NextPage } from "next";

type AboutProps = {
    date: string
}

const About: NextPage<AboutProps> = ({ date } : AboutProps) => {

    return (
        <Container>
            {date}
            <h1>Pagina em construção </h1>
        </Container>
    )
}

export default About