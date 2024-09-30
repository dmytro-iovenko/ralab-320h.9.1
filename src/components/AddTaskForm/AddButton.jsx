import { Button } from "@mui/material";

export default function AddButton({ taskRef, dispatch }) {
  function handleClick(e) {
    e.preventDefault();
    const title = taskRef.current.value;
    taskRef.current.value = "";
    dispatch({ type: "add", payload: { title } });
  }
  return (
    <Button variant="contained" onClick={handleClick} color="primary" style={{ height: "56px" }}>
      Add
    </Button>
  );
}
