import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://3.141.152.112:4000'
});



export default axiosInstance;