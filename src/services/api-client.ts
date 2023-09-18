import axios from 'axios';

const apiClient = axios.create({
    baseURL:'https://api.rawg.io/api/',
    params: {
        key:'d3b2e55f8ed34c10958f775a79450974'
    }
})

export default apiClient