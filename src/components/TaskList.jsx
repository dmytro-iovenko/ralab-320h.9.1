import TaskItem from "./TaskItem";

export default function TaskList({ tasks, dispatch }) {
  console.log(tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} dispatch={dispatch}/>
      ))}
    </ul>
  );
}
