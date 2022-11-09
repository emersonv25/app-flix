import { Container } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Context } from "vm";

// site.com/movie/one-piece
export const getStaticPaths : GetStaticPaths<{title: string}> = async () => {
	return {
		paths: [{ params: { title: 'one piece' } }, { params: {title: 'naruto'}}],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (context : Context) => {
    const title : string =  context.params.title;
    console.log(title)
    return {
        props: {
            title : `${title} - ${new Date().getSeconds()}`
        }, // will be passed to the page component as props
        revalidate: 10
    }
}

// site.com/1


type Props = {
    title: string
}

const Title: NextPage<Props> = ({ title } : Props) => {

    return (
        <Container>
            {title}
            <h1>Está é a pagina sobre mais informações </h1>
        </Container>
    )
}

export default Title