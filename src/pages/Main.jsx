import React from "react";
import Input from "../redux/components/Input/Input";
import TodoList from "../redux/components/TodoList/TodoList";

export default function Main() {
  return (
    <>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </>
  );
}
