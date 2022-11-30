import useSWR from 'swr';
import { server } from "../config";

const key = `?api_key=${process.env.API_KEY}`;


export default function fetcher(endpoint) {

    const { data, error } = useSWR(`${server}${endpoint}${key}`, fetcher)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}