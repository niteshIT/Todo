import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [input, setInput] = useState({});
  const handleClick = (e) => {
    e.preventDefault();
    onAddTodo(input);
    setInput({ id: "", content: "", checked: false });
  };
  return (
    <form onSubmit={handleClick}>
      <div className="inputclass">
        <input
          className="input"
          type="text"
          value={input.content}
          onChange={(e) =>
            setInput({
              id: e.target.value,
              content: e.target.value,
              checked: false,
            })
          }
          placeholder="Enter An Item"
        />

        <button type="submit" className="inputbtn">
          Add
        </button>
      </div>
    </form>
  );
};
