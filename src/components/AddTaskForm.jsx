import { useRef } from "react";
import AddButton from "./AddTaskForm/AddButton";
import AddTaskInput from "./AddTaskForm/AddTaskInput";
import { Box, Paper } from "@mui/material";

export default function AddTaskForm({ dispatch }) {
  let newTaskRef = useRef(null);
  return (
    <Paper style={{ padding: "16px", marginBottom: "16px" }}>
      <Box display="flex" alignItems="center">
        <AddTaskInput ref={newTaskRef} style={{ flexGrow: 1, marginRight: "8px" }} />
        <AddButton taskRef={newTaskRef} dispatch={dispatch} />
      </Box>
    </Paper>
  );
}
