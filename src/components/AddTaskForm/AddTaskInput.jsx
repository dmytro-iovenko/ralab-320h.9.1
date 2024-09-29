import { forwardRef } from "react";

function AddTaskInput(props, ref) {
  return <input type="text" placeholder="Add task" {...props} ref={ref} />;
}

export default forwardRef(AddTaskInput);
