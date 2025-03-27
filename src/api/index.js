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

export const addProductToWatchList = async (product) => {
  const { data } = await instance.get('/watchList');

  const isProductInWatchList = data.some((item) => item.id === product.id);

  if (isProductInWatchList) {
    throw new Error("Product existed in watch list!")
  }

  await instance.post('/watchList', product);
};

export const addToCart = async (product) => {
  const { data } = await instance.get('/cartItems');
  const isExist = data?.some(d => d.id === product.id)
  if (!isExist) {
    await instance.post('/cartItems', {
      ...product,
      quantity: 1,
    })
  } else {
    throw new Error("Product existed in cart!")
  }
}
