import TaskItem from "./TaskItem";
import { List } from "@mui/material";

export default function TaskList({ tasks, dispatch }) {
  // console.log(tasks);
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} dispatch={dispatch}/>
      ))}
    </List>
  );
}
