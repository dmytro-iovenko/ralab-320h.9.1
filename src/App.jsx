import { useReducer, useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
// import initialState from "./data/todos";
import todoReducer from "./utils/todoReducer";
import { Typography } from "@mui/material";
import * as TodosAPI from "./data/todos-api";

const initialState = [];

function App() {
  const [tasks, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    let isMounted = true;
    (async function () {
      try {
        const todos = await TodosAPI.getTodos();
        isMounted && console.log("Initial load", todos);
        isMounted && dispatch({ type: "init", payload: todos });
      } catch (error) {
        console.error("Error load todos:", error);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div style={{ padding: "16px" }}>
      <Typography variant="h4">Create Todo List</Typography>
      <AddTaskForm dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default App;
