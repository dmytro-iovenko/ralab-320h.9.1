import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

// search books by title, author, ISBN or keywords
export async function getTodos() {
    const response = await axios.get("todos");
    return response.data;
}
