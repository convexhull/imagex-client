import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://3.94.61.55:5000'
});



export default axiosInstance;