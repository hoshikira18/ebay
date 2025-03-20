import axios from "axios";
export const instance = axios.create({
  baseURL: "http://localhost:9999",
});

export const getProductById = async (id) => {
  const product = await instance
    .get(`/products/${id}`)
    .then(({ data }) => data);
  return product;
};

export const getAllProduct = async () => {
  try {
    const { data } = await instance.get("/products");
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
