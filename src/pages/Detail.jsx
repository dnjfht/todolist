import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const paramID = useParams().id;
  console.log(paramID);
  const todos = useSelector((state) => state.todos);
  const filterTodos = todos.filter((todo) => todo.id === paramID)[0];
  console.log(filterTodos);
  const navigate = useNavigate();
  return (
    <div>
      <h3>입력받은 ID와 일치하는 상세보기를 출력</h3>
      <p>{filterTodos.title}</p>
      <p>{filterTodos.contents}</p>
      <p>완료여부 : {filterTodos.isDone.toString()}</p>
      <br />
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        이전으로
      </button>
    </div>
  );
}

export default Detail;
