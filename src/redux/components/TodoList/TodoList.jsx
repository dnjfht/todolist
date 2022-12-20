import React from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

export default function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <div>
      <h2>{isActive ? "해야 할 일" : "완료한 일"}</h2>
      {todos
        .filter((todo) => todo.isDone === !isActive)
        .map((todo) => {
          return <Todo key={todo.id} todo={todo} isActive={isActive} />;
        })}
    </div>
  );
}
