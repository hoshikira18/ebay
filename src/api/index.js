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

export const getAddProductToWatchList = async (product) => {
  try {
    const { data } = await instance.get(`/watchList`);

    const isProductInWatchList = data.some((item) => item.id === product.id);

    if (isProductInWatchList) {
      return {
        success: false,
        message: "This product is already in your watchlist.",
      };
    }

    await instance.post(`/watchList`, product);

    return { success: true, message: "Product added to watchlist!" };
  } catch (error) {
    console.error("Error adding product to watchlist:", error);
    return {
      success: false,
      message: "Something went wrong, please try again.",
    };
  }
};
