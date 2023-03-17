import axios from "axios";
import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const series: string[] = await axios
        .get(process.env.NEXT_PUBLIC_BACKEND_API_URL + "/Series/getSerieKeyList")
        .then((res) => res.data);

    const fields: ISitemapField[] = series.map((uri) => {
        let uriFormatted = uri;

        uriFormatted = uriFormatted.replaceAll("&", "&amp;");
        uriFormatted = uriFormatted.replaceAll("<", "&lt;");
        uriFormatted = uriFormatted.replaceAll(">", "&gt;");
        uriFormatted = uriFormatted.replaceAll(" ", "%20");
        return {
            loc: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/serie/${uriFormatted}`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly'
        };
    });

    return getServerSideSitemap(ctx, fields);
};

export default getServerSideProps;