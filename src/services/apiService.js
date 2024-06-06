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

const addTodo = async (newTodo) => {
  await axios.post("http://localhost:8000/api/v1/todos", { name: newTodo });
};

export { getTodos, addTodo };
