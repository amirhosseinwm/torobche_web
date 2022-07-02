import { baseUrl } from "./baseUrl";
import axios from "axios";

export const signUpApi = async (username, email, password) => {
    const url = `${baseUrl}/user/signup/v0/`;
    const response = await axios.post(url, {
        username: username,
        email: email,
        password: password,
    });
    return response;
};

export const logInApi = async (username, password) => {
    const url = `${baseUrl}/user/login/v0/`;
    const response = await axios.post(url, {
        username: username,
        password: password,
    });
    return response;
};

export const logOutApi = async () => {
    const token = localStorage.getItem("token");
    const url = `${baseUrl}/user/signout/v0/`;
    const response = await axios.post(url, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });
    return response;
};
