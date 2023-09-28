import axios, { AxiosRequestConfig } from 'axios';

interface FecthResponse<T> {
    count: number,
    results: T[]
}

const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api/',
    params: {
        key:'d3b2e55f8ed34c10958f775a79450974'
    }
})

class APIClient{
    endpoint: string;

    constructor(endpoint:string) {
        this.endpoint = endpoint;
    }

    getAll = async <T>(config?:AxiosRequestConfig)=> {
        return axiosInstance.get<FecthResponse<T>>(this.endpoint,config)
            .then((res) => res.data.results);       
    }
}

export default APIClient