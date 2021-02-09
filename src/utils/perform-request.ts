import axios, {AxiosPromise, AxiosRequestConfig} from 'axios';

const DEFAULT_REQUEST_CONFIG: AxiosRequestConfig = {
    headers: {
        'X-RapidAPI-key': process.env.REACT_APP_API_KEY,
    },
};

export const performRequest = (config: AxiosRequestConfig): AxiosPromise<any> => {
    const requestConfig = {
        ...DEFAULT_REQUEST_CONFIG,
        ...config,
    };

    return (
        axios(requestConfig)
    );
};
