import { IoIosAddCircle } from "react-icons/io";
import { addTodo } from "../services/apiService";
import { useRef } from "react";

const AddTodo = () => {
  const inputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addTodo(inputRef.current.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="add-todo">
      <input ref={inputRef} type="text" placeholder="Write your next task" />
      <button>
        <IoIosAddCircle style={{ fontSize: "3rem" }} />
      </button>
    </form>
  );
};
export default AddTodo;
