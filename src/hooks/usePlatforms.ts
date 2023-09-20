import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slig: string
}

const usePlatform = () => useData<Platform>('/platforms/lists/parents');

export default usePlatform;
