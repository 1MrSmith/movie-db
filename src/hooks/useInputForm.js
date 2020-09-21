import { useReducer } from 'react';

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  }
}

const useInputForm = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  }

  return {
    loginEmail: state?.loginEmail || '',
    loginPassword: state?.loginPassword || '',
    onChange,
  }
}

export default useInputForm;
