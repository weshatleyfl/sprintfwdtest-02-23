import React from "react";
import { useState } from "react";
import "./todoListFooter.css";

const TodoListFooter = ({ setTodos }) => {
  const [value, setValue] = useState("");
  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };
  const onClickHandler = () => {
    setValue('')
    setTodos((prev)=>[...prev, {todoValue: value, completed:false, id: new Date()}])
  };
  return (
    <div className="todoList_footer">
      <input className="" type="text" value={value} onChange={onChangeHandler} placeholder='Add a task here...' />
      <button className="createButton" onClick={onClickHandler}>Add</button>
    </div>
  );
};

export default TodoListFooter;
