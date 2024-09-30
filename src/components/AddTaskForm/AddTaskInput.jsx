import { forwardRef } from "react";
import { TextField } from "@mui/material";

function AddTaskInput(props, ref) {
  return <TextField variant="outlined" placeholder="Add task" {...props} inputRef={ref} />;
}

export default forwardRef(AddTaskInput);
