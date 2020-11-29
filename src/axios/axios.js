import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://165.22.182.250:4000'
});



export default axiosInstance;