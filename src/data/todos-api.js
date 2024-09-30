import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

axios.interceptors.request.use(
  (config) => {
    config.metadata = { ...config.metadata, elapsedTime: {} };
    config.metadata.elapsedTime.start = Date.now();
    console.log("Axious request begins:", config);
    return config;
  },
  (error) => {
    console.log("Axious request failed:", error);
    return error;
  }
);

axios.interceptors.response.use(
  (response) => {
    const elapsedTime = response.config.metadata.elapsedTime;
    elapsedTime.end = Date.now();
    elapsedTime.total = elapsedTime.end - elapsedTime.start;
    console.log(`The request took ${elapsedTime.total} ms.`);
    return response;
  },
  (error) => {
    console.log("Axious response failed:", error);
    return error;
  }
);

export async function getTodos() {
  const response = await axios.get("todos");
  return response.data;
}

export async function createTodoTask(taskBody) {
  const response = await axios.post("todos", taskBody);
  return response.data;
}
