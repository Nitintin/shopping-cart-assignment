import {useEffect,useState} from 'react'
import axios from 'axios'

const UseFetch = (Url) => {
    const [isLoading,setIsLoading]=useState(true);
    const [rawData,setRawData]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await axios(Url);
            setRawData(result.data);
            setIsLoading(false);
        }
        fetchData();
    },[Url]);

    return [rawData,isLoading];
}

export default UseFetch;
