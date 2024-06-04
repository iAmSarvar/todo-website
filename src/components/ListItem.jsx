import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const ListItem = () => {
  return (
    <li>
      <div>
        <input type="checkbox" />
        <h2>Task</h2>
      </div>
      <div>
        <button>
          <FaRegEdit style={{ fontSize: "2rem" }} />
        </button>
        <button>
          <MdDeleteOutline style={{ fontSize: "2rem" }} />
        </button>
      </div>
    </li>
  );
};
export default ListItem;
