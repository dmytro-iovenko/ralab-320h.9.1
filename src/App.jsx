import { useReducer } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import initialState from "./data/todos";
import todoReducer from "./utils/todoReducer";
import { Typography } from "@mui/material";

function App() {
  const [tasks, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div style={{ padding: "16px" }}>
      <Typography variant="h4">Create Todo List</Typography>
      <AddTaskForm dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default App;
