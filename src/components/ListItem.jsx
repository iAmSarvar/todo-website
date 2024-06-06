import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { deleteTodo } from "../services/apiService";
import { useState } from "react";
import Loader from "./Loader";

// eslint-disable-next-line react/prop-types
const ListItem = ({ todo }) => {
  const [isLoading, setIsLoading] = useState(false);

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
        <input type="checkbox" />
        <h2>{Object(todo).name}</h2>
      </div>
      <div>
        <button>
          <FaRegEdit style={{ fontSize: "2rem" }} />
        </button>
        <button onClick={() => handleDeleteTodo()}>
          <MdDeleteOutline style={{ fontSize: "2rem" }} />
        </button>
      </div>
    </li>
  );
};
export default ListItem;
