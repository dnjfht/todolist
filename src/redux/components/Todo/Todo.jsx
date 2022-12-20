import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTODO, switchTODO } from "../../modules/todos";

export default function Todo({ todo, isActive }) {
  const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${todo.title}" 항목을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitchButton = () => {
    dispatch(switchTODO(todo.id));
  };

  const handleRemoveButton = () => {
    if (window.confirm(CONFIRM_MESSAGE)) dispatch(removeTODO(todo.id));
  };

  const handleDetailPageLinkClick = () => {
    navigate(`/${todo.id}`);
  };

  console.log(isActive);
  return (
    <div>
      <h3>{todo.title}</h3>
      <p onClick={handleDetailPageLinkClick}>[상세보기]</p>
      <p>{todo.contents}</p>
      <button onClick={handleSwitchButton}>{isActive ? "완료" : "취소"}</button>
      <button onClick={handleRemoveButton}>삭제</button>
    </div>
  );
}
