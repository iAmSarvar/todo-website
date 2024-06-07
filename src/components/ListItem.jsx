import { MdDeleteOutline } from "react-icons/md";
import { deleteTodo, updateTodo } from "../services/apiService";
import { useState } from "react";
import Loader from "./Loader";

// eslint-disable-next-line react/prop-types
const ListItem = ({ todo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(Object(todo).isDone);

  const handleUpdate = () => {
    setIsLoading(true);
    updateTodo(!checked, Object(todo)._id).then(() => {
      setIsLoading(false);
    });
  };

  const handleDeleteTodo = () => {
    setIsLoading(true);
    deleteTodo(Object(todo)._id).then(() => {
      setIsLoading(false);
    });
  };
  return (
    <li>
      {isLoading && <Loader />}
      <div>
        <input
          onChange={() => setChecked((p) => !p)}
          onClick={() => handleUpdate()}
          checked={checked}
          type="checkbox"
        />
        <h2 className={`${checked ? "done" : "not-done"}`}>
          {Object(todo).name}
        </h2>
      </div>
      <div>
        <button onClick={() => handleDeleteTodo()}>
          <MdDeleteOutline style={{ fontSize: "2rem" }} />
        </button>
      </div>
    </li>
  );
};
export default ListItem;
