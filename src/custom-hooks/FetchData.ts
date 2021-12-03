import { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetJoke = () => {
    const [joke, setData] = useState<any>([]);

    async function getJoke() {
        const result = await server_calls.get_joke();
        // console.log(result)
        setData(result)
    }
    // side effect for if anything happens on the page
    // useEffect( () => {
    //     getJoke();
    // }, []);
    return {joke, getData:getJoke}
}