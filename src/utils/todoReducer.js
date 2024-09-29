export default function reducer(state, { type, payload }) {
  console.log(type, state);
  switch (type) {
    case "complete":
      return state.map((task) => {
        task.id === payload.id && (task.completed = payload.completed);
        return task;
      });
    case "delete":
      return state.filter((task) => task.id !== payload.id);
    case "edit":
      return state.map((task) => {
        task.id === payload.id && (task.edit = true);
        return task;
      });
    case "save":
      return state.map((task) => {
        if (task.id === payload.id) {
          task.title = payload.title;
          task.edit = false;
        }
        return task;
      });
  }
  return state;
}
