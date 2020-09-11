import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:44444'
});



export default axiosInstance;