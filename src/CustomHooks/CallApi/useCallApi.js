import { useEffect, useState } from "react"
import axios from "axios"

const useCallApi = (url, method) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const methodArr = ['get', 'post', 'put']

    const getFunc = async (url, method) => {
        try{
            setIsLoading(true)
            const apiResponse = await axios({
                method: method,
                url: url,
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
    const postFunc = async (url, method) => {console.log('postFunc')}
    const putFunc = async (url, method) => {console.log('putFunc')}
    const isMehtod = (method) =>{
        return methodArr.includes(method)
    }
    const checkMethodType = (url, method) => {
        const meth = method.toLowerCase()
        if(isMehtod(meth)){
            return meth === 'get' ? getFunc(url, meth)
            : meth === 'post' ? postFunc(url, meth)
            : meth === 'put' ? putFunc(url, meth)
            :'Not Matched'
        }
        else console.error('Wrong Method')
    }
    useEffect(()=>{
        checkMethodType(url, method)
    },[url, method])
    return {isLoading, data, error}
}

export default useCallApi
