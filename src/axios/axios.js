import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.yashsingh.dev'
});

export default axiosInstance;