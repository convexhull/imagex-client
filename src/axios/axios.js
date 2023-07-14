import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://13.53.200.109:4000'
});

export default axiosInstance;