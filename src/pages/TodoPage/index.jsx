import React, { useEffect } from "react";
import { useState } from "react";
import Paper from "../../components/Paper";
import TodoItem from "./components/TodoItem";
import TodoListFooter from "./components/TodoListFooter";
import "./todoPage.css";

const TodoPage = () => {
  //todo: [{todoValue, completed}]
  const todosStorage = localStorage.getItem("todos");
  const jsonTodos = JSON.parse(todosStorage);
  const [todos, setTodos] = useState(jsonTodos || []);

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todoPage">
      <Paper>
        <div className="todoList_content">
          <h1>Todo List</h1>

          <div className="todoList_items">
            {todos.length > 0 &&
              todos.map((todo, index) => {
                return (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    setTodos={setTodos}
                    todoIndex={index}
                  />
                );
              })}
          </div>
          <TodoListFooter setTodos={setTodos} />
        </div>
      </Paper>
    </div>
  );
};

export default TodoPage;
