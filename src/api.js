import axios from "axios";

const URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  try {
    return await axios.get(URL);
  } catch (error) {
    console.log("Error while calling getProducts from api, ", error);
  }
}

export const getProductCategories = async () => {
  try {
    return await axios.get(`${URL}/categories`);
  } catch (error) {
    console.log("Error while calling getProductCategories from api, ", error);
  }
}