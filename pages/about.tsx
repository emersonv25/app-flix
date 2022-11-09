import { Container } from "@mui/material";
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
    const date = new Date().getSeconds()
    return {
        props: {
            date
        }, // will be passed to the page component as props
        revalidate: 10
    }
}

// site.com/1


type AboutProps = {
    date: string
}

const About: NextPage<AboutProps> = ({ date } : AboutProps) => {

    return (
        <Container>
            {date}
            <h1>Está é a pagina sobre mais informações </h1>
        </Container>
    )
}

export default About