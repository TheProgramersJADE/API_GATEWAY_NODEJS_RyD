import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const httpClient = axios.create({
    baseURL: process.env.AUTH_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (url, config = {}) => {
    try {
        const response = await httpClient.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const post = async (url, data, config = {}) => {
    try {
        const response = await httpClient.post(url, data, config);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};