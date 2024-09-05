import { FaCheck } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
export const TodoList = ({ data, checked, deleteFun, onhandleCheckedTodo }) => {
  return (
    <li>
      <div className="listItem grid grid-two--cols ">
        <span className={` ${checked ? "checkList" : ""}`}>{data}</span>
        <div className="listIcon grid grid-two--cols">
          <a onClick={() => onhandleCheckedTodo(data)}>
            <FaCheck />
          </a>
          <a onClick={() => deleteFun(data)}>
            <FaTrashAlt />
          </a>
        </div>
      </div>
    </li>
  );
};
