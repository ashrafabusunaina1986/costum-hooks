import { useCallback, useState } from "react"

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const sendRequest = useCallback( async (requestConfig, applyData) => {
        setIsLoading(true)
        try {
            const response = await fetch(
                requestConfig.url,
                {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                    headers: requestConfig.headers ? requestConfig.headers : {}
                }
            )

            if (!response.ok) throw new Error('request failed')

            const data = await response.json()
            applyData(await data)
            setError(null)
        } catch (error) {
            setError(error.message || 'something went wrong')
        }
        setIsLoading(false)
    },[])
    return {
        isLoading, error, sendRequest
    }
}

export default useHttp