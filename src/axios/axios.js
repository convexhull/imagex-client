import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://api.yashpratapsingh.com'
});



export default axiosInstance;