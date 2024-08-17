import { useState, useEffect } from "react";

const useFetch = (url) =>{

    const [data, setData] = useState(null);
    const [ispending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=> {
            fetch(url, {signal : abortCont.signal})
                .then(res => {
                    // console.log(res);
                    if(!res.ok){
                        throw Error('could not fetch the data for the resource')
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err =>{
                    // console.log(err.message);
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted');
                    }else{
                        setError(err.message);
                        setIsPending(false);
                    }
                    
                })
        }, 200);

        return ()=> abortCont.abort();
    },[url]);

    return {data, ispending, error};
}

export default useFetch;