'use client'
import useHttp from "@/hooks/use-http/use-http"
import { Fragment, useCallback, useEffect, useState } from "react"
import Card from "../card/Card"

const ReqHttp = () => {
    const [post, setPost] = useState([])
    const { isLoading, error, sendRequest: onFetch } = useHttp()

    useEffect(() => {
        onFetch({
            url: 'https://jsonplaceholder.typicode.com/posts'
        }, setPost)
    }, [])
    const onsendHandler = useCallback(() => {
        onFetch({
            url: 'https://jsonplaceholder.typicode.com/posts'
        }, setPost)
    }, [])
    return <Fragment>
        {/* <button onClick={onsendHandler}>send</button> */}
        <Card>
            {!isLoading ?


                post.map(item => {
                    return <Card>
                        <div key={item.id} >
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                    </Card>
                })

                : 'Loading...'}
        </Card>
    </Fragment>
}

export default ReqHttp