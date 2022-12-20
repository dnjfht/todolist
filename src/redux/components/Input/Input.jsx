import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTODO } from "../../modules/todos";

export default function Input() {
  // 컴포넌트 내부에서 사용할 state 2개(제목, 내용) 정의
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onClickContentsChange = (event) => {
    setContents(event.target.value);
  };

  console.log(title, contents);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // 에러 메시지 발생 함수
  const getErrorMsg = (errorCode, params) => {
    switch (errorCode) {
      case "01":
        return alert(
          `[필수 입력 값 검증 실패 안내]\n\n제목과 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요.\n입력된 값(제목 : '${params.title}', 내용 : '${params.contents}')`
        );
      case "02":
        return alert(
          `[내용 중복 안내]\n\n입력하신 제목('${params.title}및 내용('${params.contents}')과 일치하는 TODO는 이미 TODO LIST에 등록되어 있습니다.\n기 등록한 TODO ITEM의 수정을 원하시면 해당 아이템의 [상세보기]-[수정]을 이용해주세요.`
        );
      default:
        return `시스템 내부 오류가 발생하였습니다. 고객센터로 연락주세요.`;
    }
  };

  const onSubmitTodos = (event) => {
    // submit의 고유 기능인, 새로고침(refresh)을 막아주는 역할
    event.preventDefault();

    // 제목과 내용이 모두 존재해야만 정상처리(하나라도 없는 경우 오류 발생)
    // "01" : 필수 입력값 검증 실패 안내
    if (!title || !contents) {
      return getErrorMsg("01", { title, contents });
    }

    // 이미 존재하는 todo 항목이면 오류
    const validationArr = todos.filter(
      (todo) => todo.title === title && todo.contents === contents
    );

    // "02" : 내용 중복 안내
    if (validationArr.length > 0) {
      return getErrorMsg("02", { title, contents });
    }

    // 추가하는 todo를 newTodo라는 객체로 새로 만듦
    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };

    // todo를 추가하는 reducer 호출
    dispatch(addTODO(newTodo));

    // state 두 개를 초기화
    setTitle("");
    setContents("");
  };

  return (
    <div>
      <form onSubmit={onSubmitTodos}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          id="title"
          onChange={onClickTitleChange}
          value={title}
        ></input>
        <label htmlFor="contents">Contents</label>
        <input
          type="text"
          placeholder="내용을 입력하세요"
          id="contents"
          onChange={onClickContentsChange}
          value={contents}
        ></input>
        <button>입력</button>
      </form>
    </div>
  );
}
