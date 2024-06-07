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

const deleteTodo = async (id) => {
  await axios.delete(`http://localhost:8000/api/v1/todos/${id}`);
};

const updateTodo = async (isDone, id) => {
  await axios.patch(`http://localhost:8000/api/v1/todos/${id}`, { isDone });
};

export { getTodos, addTodo, deleteTodo, updateTodo };
