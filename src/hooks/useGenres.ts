import { useQuery } from "@tanstack/react-query";
import APIClient, { FecthResponse } from "../services/api-client";


const apiClient = new APIClient('/genres');

export interface Platform {
    id: number,
    name: string,
    slug : string
}
export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const useGenres = () =>
    useQuery<FecthResponse<Genre>,Error>({
            queryKey: ['genres'],
            queryFn: apiClient.getAll<Genre>
    });

export default useGenres;
