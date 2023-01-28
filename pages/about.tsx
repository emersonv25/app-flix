import { Container } from "@mui/material";
import { NextPage } from "next";

const About: NextPage = () => {
    const domain = `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`
    return (
        <Container>
            <h1>Sobre nós</h1>
            <div>
            {domain} é um site para assistir seus animes favoritos online, legendado, dublado e de onde quiser, temos um catalogo de mais de 1500 animes contando com animes recentes e antigos, além disso atualizamos diariamente o nosso catalogo para você poder acompanhar os novos episodios do seu anime favorito. 
            <br/><br/>
             O Designer foi pensado para ser o mais agradavel possível, além de ser responsivo tendo uma otima experiencia em dispositivos moveis.
             <br/><br/>
             Nosso site é novo e ainda estamos em desenvolvimento, e planejamos lançar diversas novas funcionalidades em breve, nosso objetivo é ser um diferencial entre os sites genéricos de animes.
            </div>
        </Container>
    )
}

export default About