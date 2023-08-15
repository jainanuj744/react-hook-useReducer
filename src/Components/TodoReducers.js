import { useReducer } from "react";
import { TiTick, TiTrash } from "react-icons/ti";
import { formReducer, taskReducer } from "./reducers";

export default function TodoReducers() {
  // const list = []

  let [list, dispatchList] = useReducer(taskReducer, []);

  let [state, dispatch] = useReducer(formReducer, {
    title: "",
    by: "",
  });

  const handleTask = (e) => {
    e.preventDefault();
    dispatch({
      type: "HANDLE_TASK",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <>
      <div>
        <h1>My TodoList</h1>
        <div>
          I want to do
          <input type="text" name="title" onChange={handleTask} /> by{" "}
          <input type="date" name="by" onChange={handleTask} />
          <button
            className="wishBtn"
            onClick={()=>dispatchList({ type: "ADD_TASK", payload: state })}
          >
            Add a Task
          </button>
        </div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <span
                style={{ textDecoration: item.isDone ? "line-through" : "" }}
              >
                <strong>{item.title}</strong> is due by {item.by}
              </span>
              <span>
                <TiTick size={24} onClick={() => dispatchList({ type: "DONE_TASK", payload: item.id })} />
              </span>
              <span>
                <TiTrash size={24} onClick={() => dispatchList({ type: "REMOVE_TASK", payload: item.id })} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
