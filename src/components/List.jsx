import ListItem from "./ListItem";

// eslint-disable-next-line react/prop-types
const List = ({ todos }) => {
  return (
    <ul className="list">
      {Object(todos).map((todo) => {
        return <ListItem todo={todo} key={todo._id} />;
      })}
    </ul>
  );
};
export default List;
