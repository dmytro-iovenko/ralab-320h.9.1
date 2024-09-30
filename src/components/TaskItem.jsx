import { useRef } from "react";
import { TextField, Button, Box, ListItem, Checkbox, Typography, Paper } from "@mui/material";

function EditTask({ task, dispatch }) {
  let refTaskTitle = useRef(task.title);
  function handleClick() {
    dispatch({ type: "save", payload: { id: task.id, title: refTaskTitle.current.value } });
  }
  return (
    <>
      <TextField
        size="small"
        variant="outlined"
        defaultValue={task.title}
        inputRef={refTaskTitle}
        style={{ flexGrow: 1, marginRight: "8px" }}
        multiline
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Save
      </Button>
    </>
  );
}

function NormalTask({ task, dispatch }) {
  function handleClickEdit() {
    dispatch({ type: "edit", payload: { id: task.id } });
  }
  function handleClickDelete() {
    dispatch({ type: "delete", payload: { id: task.id } });
  }
  return (
    <>
      <Typography variant="body1" component="span" style={{ flexGrow: 1, marginRight: "8px" }}>
        {task.title}
      </Typography>
      <Button variant="outlined" onClick={handleClickEdit} style={{minWidth: '65px'}}>
        Edit
      </Button>
      <Button variant="outlined" color="error" onClick={handleClickDelete}  style={{minWidth: '90px'}}>
        Delete
      </Button>
    </>
  );
}

export default function TaskItem({ task, dispatch }) {
  function handleChange() {
    dispatch({ type: "complete", payload: { id: task.id, completed: !task.completed } });
  }
  return (
    <Paper style={{ padding: "16px", marginBottom: "16px" }}>
      <ListItem disableGutters>
        <Box display="flex" alignItems="center" width="100%" gap="8px">
          <Checkbox checked={task.completed} onChange={handleChange} />
          {task.edit ? <EditTask task={task} dispatch={dispatch} /> : <NormalTask task={task} dispatch={dispatch} />}
        </Box>
      </ListItem>
    </Paper>
  );
}
