import axios from "axios";

const getTodos = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/todos");
    const todos = response.data.data.todos;

    return todos;
  } catch (error) {
    console.log(error);
  }
};

export { getTodos };
