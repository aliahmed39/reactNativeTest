const reducer = (
  state = {
    data: null,
  },
  action,
) => {
  switch (action.type) {
    case 'SET_DATA': {
      return {...state, data: action.data};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
