// axios
import axios from "axios";
// exceptions
import ValidationError from "../exceptions/validationError";

const callApi = () => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:5000",
    });

    axiosInstance.interceptors.request.use(
        (config) => {
            return config;
        },
        (err) => {
            throw err;
        }
    );

    axiosInstance.interceptors.response.use(
        (res) => {
            return res;
        },
        (err) => {
            const res = err?.response;
            if (res) {
                if (res.status === 409) {
                    throw new ValidationError(res.data.errors);
                } else if(res.status === 401) {
                    return err;
                }
            }
            
            throw err;
        }
    );

    return axiosInstance;
};

export default callApi;
