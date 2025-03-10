import { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import ApiManager from "./ApiManager";

export const GetUsers = (async () => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        headers: {
            'content-Type': 'application/json'
        } as RawAxiosRequestHeaders,
    };
    try {
        const response: AxiosResponse = await ApiManager.get('/users?page=1', config);
        return response;
    } catch (error) {
        console.error(error);
    }
})();