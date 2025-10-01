// store.js
import { createStore } from 'redux';

// 初始状态
const initialState = {
  user: null,
  token: null,
};

// Reducer 函数
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

// 创建 Store
const store = createStore(rootReducer);

export default store;