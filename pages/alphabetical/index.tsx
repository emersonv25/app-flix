import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IndexAlphabeticalRedirect: NextPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.push({
            pathname: '/alphabetical/1'
        })
    })
    return (<></>)
}

export default IndexAlphabeticalRedirect