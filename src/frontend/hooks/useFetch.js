import { useState, useEffect } from 'react';
import api from "../api/axios";

const useFetch = (url, method, params) => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        setError(null)

        api[method](url, params)
            .then(res => {
                setLoading(false);
                setResponse(res.data);
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            });
    }, [url]) //eslint-disable-line

    return [response, loading, error];
}

export default useFetch;