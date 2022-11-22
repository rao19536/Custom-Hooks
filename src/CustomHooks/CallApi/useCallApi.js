import { useEffect, useState } from "react"
import axios from "axios"

const useCallApi = (url='', method='', body={}) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    const getRequest = async () => {
            try{
                setIsLoading(true)
                const apiResponse = await axios({
                    method: method,
                    url: url
                })
                if(apiResponse.status === 200){
                    setData(apiResponse.data)
                }
            }catch(err){
                console.error(err)
                setError(err)
            }finally{
                setIsLoading(false)
            }
    }
    const postRequest = async (postReq) =>{
        try{
            setIsLoading(true)
            const apiResponse = await axios({
                method: method,
                url: url,
                body:postReq
            })
            if(apiResponse.status === 200){
                setData(apiResponse.data)
                console.log('Great Stuf==>', apiResponse)
            }
        }catch(err){
            console.error(err)
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    // useEffect(()=>{
    //     // 
    // },[url, method])
    return {getRequest, postRequest, isLoading, data, error}
}

export default useCallApi
