import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import List from "./components/List";
import Result from "./components/Result";
import { getTodos } from "./services/apiService";

const App = () => {
  const [todos, setTodos] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getTodos().then((allTodos) => setTodos(allTodos));
  }, [todos]);

  return (
    <div className="container">
      <Result todos={todos} />
      <AddTodo />
      <List todos={todos} />
    </div>
  );
};
export default App;
