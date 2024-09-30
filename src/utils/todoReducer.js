function nextId(tasks) {
  return (
    tasks.reduce((maxId, task) => {
      console.log(maxId, task.id);
      return Math.max(maxId, task.id);
    }, 1) + 1
  );
}

export default function reducer(state, { type, payload }) {
  console.log(type, state);
  switch (type) {
    case "init":
      return payload
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
      if (payload.title.trim() === "") return state;
      return state.map((task) => {
        if (task.id === payload.id) {
          task.title = payload.title;
          delete task.edit;
        }
        return task;
      });
    case "add":
      // if (payload.title.trim() === "") return state;
      // const newTask = {
      //   id: nextId(state),
      //   userId: 1,
      //   title: payload.title,
      //   completed: false,
      // };
      // console.log(JSON.stringify(newTask));
      // return [newTask, ...state];

      // fix(align) id for new task
      payload.id = nextId(state); 
      return [payload, ...state];
    }
  return state;
}
