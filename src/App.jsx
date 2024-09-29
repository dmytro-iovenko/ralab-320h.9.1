import { useReducer } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import initialState from "./data/todos";
import todoReducer from "./utils/todoReducer";

function App() {
  const [tasks, dispatch] = useReducer(todoReducer, initialState);
  return (
    <>
      <h2>Create Todo List</h2>
      <AddTaskForm />
      <TaskList tasks={tasks} dispatch={dispatch}/>
    </>
  );
}

export default App;
