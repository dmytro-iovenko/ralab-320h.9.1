import { Button } from "@mui/material";
import * as TodosAPI from "../../data/todos-api";

export default function AddButton({ taskRef, dispatch }) {
  async function handleClick(e) {
    e.preventDefault();
    try {
      const title = taskRef.current.value;
      if (title.trim() === "") return;
      const newTask = {
        // id: nextId(state),
        userId: 1,
        title: title,
        completed: false,
      };

      const createdTask = await TodosAPI.createTodoTask(newTask);
      console.log("Add task", createdTask);
      dispatch({ type: "add", payload: createdTask });
    } catch (error) {
      console.error("Error to add a new task:", error);
    } finally {
      taskRef.current.value = "";
    }
  }
  return (
    <Button variant="contained" onClick={handleClick} color="primary" style={{ height: "56px" }}>
      Add
    </Button>
  );
}
