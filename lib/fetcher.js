import useSWR from 'swr';
import { server } from "../config";

//const key = `?api_key=${process.env.API_KEY}`;
const key = '?api_key=35e340d96345b33f4ab41e0e50bf4300';

//const api_test = 'https://api.themoviedb.org/3/movie/550?api_key=35e340d96345b33f4ab41e0e50bf4300';

export default function fetcher(endpoint) {

    const { data, error } = useSWR(`${server}${endpoint}${key}`, fetcher)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}