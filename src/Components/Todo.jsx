// import React from "react";
import "./Todo.css";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import{ getLocalStorageTodoData, setLocalStorageTodoData}from "./TodoLocalStorage"


export const Todo = () => {
  const [todoList, setTodoList] = useState(()=>getLocalStorageTodoData());

  const handleClick = (input) => {
    const { id, content, checked } = input;
    if (!content) return;
    // if (todoList.includes(content)) return;
    const ifTodoContentMatched = todoList.find(
      (currTask) => currTask.content == content
    );
    if (ifTodoContentMatched) return;
    setTodoList((prev) => [...prev, { id, content, checked }]);
  };
  setLocalStorageTodoData(todoList);

  const handleDelete = (todo) => {
    const list = todoList.filter((item) => item.content != todo);
    setTodoList([...list]);
  };
  const handleDeleteAll = () => {
    setTodoList([]);
  };
  const handleCheckedTodo = (content) => {
    const updatedTask = todoList.map((todo) => {
      if (todo.content === content) {
        return { ...todo, checked: !todo.checked };
      } else {
        return todo;
      }
    });
    setTodoList(updatedTask);
  };
  return (
    <>
      <h1 className="main-heading">Todo App</h1>
      <TodoDate></TodoDate>
      <TodoForm onAddTodo={handleClick}></TodoForm>
      <section className="section-list">
        <ul>
          {todoList.map((todo) => {
            return (
              <TodoList
                key={todo.id}
                data={todo.content}
                checked={todo.checked}
                deleteFun={handleDelete}
                onhandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
        <button onClick={handleDeleteAll} className="delBtn">
          delete all
        </button>
      </section>
    </>
  );
};
