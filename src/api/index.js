import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:9999"
})

export const getProductById = async (id) => {
    const product = await instance.get(`/products/${id}`).then(({ data }) => data)
    return product
}