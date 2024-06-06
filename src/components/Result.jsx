// eslint-disable-next-line react/prop-types
const Result = ({ todos }) => {
  const completed = Object(todos).filter((todo) => todo.isDone !== false);
  return (
    <div className="result">
      <div>
        <h1>Todo done</h1>
        <h3>Keep it up</h3>
      </div>
      <div className="result-score">
        <h3>
          {completed.length === 0 ? 0 : completed.length}/{Object(todos).length}
        </h3>
      </div>
    </div>
  );
};
export default Result;
