import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IndexPopularRedirect: NextPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.push({
            pathname: '/popular/1'
        })
    })
    return (<></>)
}

export default IndexPopularRedirect