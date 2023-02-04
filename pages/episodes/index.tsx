import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IndexEpisodesRedirect: NextPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.push({
            pathname: '/episodes/1'
        })
    })
    return (<></>)
}

export default IndexEpisodesRedirect