import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import List from "./components/List";
import Result from "./components/Result";
import { getTodos } from "./services/apiService";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoUpdated, setTodoUpdated] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getTodos().then(setTodos);
  }, [todoUpdated]);

  return (
    <div className="container">
      <Result todos={todos} />
      <AddTodo setTodoUpdated={setTodoUpdated} />
      <List setTodoUpdated={setTodoUpdated} todos={todos} />
    </div>
  );
};
export default App;
