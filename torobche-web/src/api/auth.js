import { baseUrl } from "./baseUrl";
import axios from "axios";

export const signUpApi = async (
    username,
    email,
    password,
) => {
    const url = `${baseUrl}/user/signup/v0/`;
    const response = await axios.post(url, {
        username,
        email,
        password,
    });
    return response.data;
}

export const logInApi = async (
    username,
    password,
) => {
    const url = `${baseUrl}/user/login/v0/`;
    const response = await axios.post(url, {
        username,
        password,
    });
    return response.data;
}

export const logOutApi = async () => {
    const url = `${baseUrl}/user/signout/v0/`;
    const response = await axios.post(url);
    return response.data;
}