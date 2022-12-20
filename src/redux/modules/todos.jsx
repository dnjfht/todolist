import { v4 as uuidv4 } from "uuid";

// active value
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

// active creator
export const addTODO = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const removeTODO = (payload) => {
  return {
    type: REMOVE_TODO,
    payload: payload,
  };
};

export const switchTODO = (payload) => {
  return {
    type: SWITCH_TODO,
    payload: payload,
  };
};

//initialState
const initialState = [
  {
    title: "제목1",
    contents: "내용1",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "제목2",
    contents: "내용2",
    isDone: true,
    id: uuidv4(),
  },
  {
    title: "제목3",
    contents: "내용3",
    isDone: true,
    id: uuidv4(),
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.payload];
    }
    case REMOVE_TODO: {
      // 기존의 배열에서 입력받은 id의 객체를 제거(filter)
      return state.filter((item) => item.id !== action.payload);
    }
    case SWITCH_TODO: {
      // 기존의 배열에서 입력받은 id에 해당하는 것만 isDone을 반대로 변경(아니면 그대로 반환)
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    }
    default: {
      return state;
    }
  }
};

export default todos;
