import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://18.189.1.8:7000'
});



export default axiosInstance;