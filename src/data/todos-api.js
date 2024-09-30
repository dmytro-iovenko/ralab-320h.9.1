import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export async function getTodos() {
    const response = await axios.get("todos");
    return response.data;
}

export async function createTodoTask(taskBody) {
    const response = await axios.post("todos", taskBody);
    return response.data;
}