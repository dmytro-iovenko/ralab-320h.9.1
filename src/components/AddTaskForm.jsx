import { useRef } from "react";
import AddButton from "./AddTaskForm/AddButton";
import AddTaskInput from "./AddTaskForm/AddTaskInput";

export default function AddTaskForm({ dispatch }) {
  let newTaskRef = useRef(null);
  return (
    <section>
      <AddTaskInput ref={newTaskRef} />
      <AddButton taskRef={newTaskRef} dispatch={dispatch} />
    </section>
  );
}
