import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IndexReleasesRedirect: NextPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.push({
            pathname: '/releases/1'
        })
    })
    return (<></>)
}

export default IndexReleasesRedirect