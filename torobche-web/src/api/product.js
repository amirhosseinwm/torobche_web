import { baseUrl } from "./baseUrl";
import axios from "axios";

export const getAllProductsApi = async (
    ordering,
    search,
    category,
    price_range
) => {
    const token = localStorage.getItem("token");
    const url = `${baseUrl}/product/v0/`;
    const response = await axios.get(
        url,
        {
            params: {
                ordering,
                search,
                category,
                price_range,
            },
        },
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        }
    );
    return response.data;
};

export const getProductApi = async (product_id) => {
    const token = localStorage.getItem("token");
    const url = `${baseUrl}/product/${product_id}/v0/`;
    const response = await axios.get(url, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });
    return response.data;
};

export const getCategoryApi = async () => {
    const token = localStorage.getItem("token");
    const url = `${baseUrl}/product/categories/v0/`;
    const response = await axios.get(url, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });
    return response.data;
};
