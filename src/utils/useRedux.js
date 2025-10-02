// useRedux.js 本文件是用redux的方法

import { useSelector, useDispatch } from 'react-redux';

export const useRedux = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const setToken = (token) => {
    dispatch({ type: 'SET_TOKEN', payload: token });
  };

  return {
    state,
    setUser,
    setToken,
  };
};