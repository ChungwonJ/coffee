import { createStore } from 'redux';

// 액션 타입 정의
const SET_VALUE = 'SET_VALUE';
const SET_PEOPLE = 'SET_PEOPLE';

// 액션 생성자 함수
export const setValue = (value) => ({
  type: SET_VALUE,
  payload: value,
});

export const setPeople = (number) => ({
  type: SET_PEOPLE,
  payload: number,
});

// 리듀서
const initialState = {
  value: [],
  people: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case SET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
