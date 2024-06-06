import { IoIosAddCircle } from "react-icons/io";
import { addTodo } from "../services/apiService";
import { useRef, useState } from "react";
import Loader from "./Loader";

const AddTodo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    addTodo(inputRef.current.value).then(() => setIsLoading(false));
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
