import { IoIosAddCircle } from "react-icons/io";
import { addTodo } from "../services/apiService";
import { useRef, useState } from "react";
import Loader from "./Loader";

// eslint-disable-next-line react/prop-types
const AddTodo = ({ setTodoUpdated }) => {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputRef.current.value) {
      setIsLoading(true);

      addTodo(inputRef.current.value).then(() => setIsLoading(false));
      inputRef.current.value = "";
      setTodoUpdated((prev) => !prev);
    } else {
      alert("Please enter a todo name!");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="add-todo">
      {isLoading && <Loader />}
      <input ref={inputRef} type="text" placeholder="Write your next task" />
      <button>
        <IoIosAddCircle style={{ fontSize: "3rem" }} />
      </button>
    </form>
  );
};
export default AddTodo;
