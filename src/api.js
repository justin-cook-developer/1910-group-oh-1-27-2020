import axios from "axios";

const API = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API}/posts`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${API}/todos`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
