import { baseUrl } from "./baseUrl";
import axios from "axios";

export const getUserApi = async () => {
    const url = `${baseUrl}/user/me/v0/`;
    const response = await axios.get(url);
    return response.data;
}

export const updateUserApi = async (
    username,
    email,
    password,
    phone_number,
) => {
    const url = `${baseUrl}/user/me/v0/`;
    const response = await axios.put(url, {
        username,
        email,
        password,
        phone_number,
    });
    return response.data;
}

export const addToFaveriteApi = async (product_id) => {
    const url = `${baseUrl}/user/favourite/${product_id}/v0/`;
    const response = await axios.post(url);
    return response.data;
}

export const removeFromFaveriteApi = async (product_id) => {
    const url = `${baseUrl}/user/favourite/${product_id}/v0/`;
    const response = await axios.delete(url);
    return response.data;
}

export const getFaveriteApi = async () => {
    const url = `${baseUrl}/user/favourite/v0/`;
    const response = await axios.get(url);
    return response.data;
}