import React, { useRef, useEffect } from "react";
import { useState } from "react";
import Button from "../../../../components/Button";
import "./todoItem.css";

const TodoItem = ({ todo, setTodos, todoIndex }) => {
  const { todoValue, completed } = todo;
  const [value, setValue] = useState(todoValue);
  const [updating, setUpdating] = useState(false);
  const updateInput = useRef(null);
  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };
  const onUpdateHandler = () => {
    if (completed) return;
    setUpdating(true);
  };
  const onChangeCheckedHandler = () => {
    setTodos((prev) =>
      prev.map((todo, index) => {
        if (index === todoIndex) {
          const newTodo = { ...todo, completed: !todo.completed };
          return newTodo;
        }
        return todo;
      })
    );
  };
  const onConfirm = () => {
    setTodos((prev) =>
      prev.map((todo, index) => {
        if (index === todoIndex) {
          const newTodo = { ...todo, todoValue: value };
          return newTodo;
        }
        return todo;
      })
    );
    setUpdating(false);
  };
  const onClickDelete = () => {
    setTodos((prev) => prev.filter((todo, index) => index !== todoIndex));
  };
  useEffect(() => {
    if (updating) {
      updateInput.current.select();
    }
  }, [updating]);

  return (
    <div className="todoItem">
      <div className="completedButton">
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={onChangeCheckedHandler}
        />
      </div>
      {updating ? (
        <div className="updateInput">
          <input
            ref={updateInput}
            type="text"
            name="todo"
            value={value}
            onChange={onChangeHandler}
            onBlur={onConfirm}
          />
        </div>
      ) : (
        <div
          className={`todoItem_title ${completed ? "completed" : ""}`}
          onDoubleClick={onUpdateHandler}
        >
        <p>{todoIndex+1}.  {value}</p>
          <p></p>
        </div>
      )}
      <div className="todoItem_buttons">
        {updating ? (
          <Button
            className="confirmButton"
            onClick={onConfirm}
            title="Confirm"
          />
        ) : (
          <Button
            className="updateButton"
            onClick={onUpdateHandler}
            title="Update"
            disabled={completed}
          />
        )}
        {!updating && (
          <Button
            className="deleteButton"
            onClick={onClickDelete}
            title="Delete"
          />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
