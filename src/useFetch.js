import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error("could not fetch data for that resourse :(");
                    }
                    return res.json();
                })
                .then(data => {
                    setErr(null);
                    setData(data);
                    setIsLoading(false);
                })
                .catch(err => {
                    setIsLoading(false);
                    setData(null);
                    setErr(err.message);
                });
        }, 1000);
    }, [url]);

    return { data, isLoading, err }

}
 
export default useFetch;