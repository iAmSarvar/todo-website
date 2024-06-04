import AddTodo from "./components/AddTodo";
import List from "./components/List";
import Result from "./components/Result";

const App = () => {
  return (
    <div className="container">
      <Result />
      <AddTodo />
      <List />
    </div>
  );
};
export default App;
