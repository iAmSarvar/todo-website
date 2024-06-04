import { IoIosAddCircle } from "react-icons/io";

const AddTodo = () => {
  return (
    <form className="add-todo">
      <input type="text" placeholder="Write your next task" />
      <button>
        <IoIosAddCircle style={{ fontSize: "3rem" }} />
      </button>
    </form>
  );
};
export default AddTodo;
