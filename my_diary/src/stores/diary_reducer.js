export const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'CREATE': {
      newState = [...state, action.data];
      break;
    }
    case 'UPDATE': {
      newState = state.map((elem) => (String(elem.id) === String(action.data.id) ? action.data : elem));
      break;
    }
    case 'DELETE': {
      newState = state.filter((elem) => String(elem.id) !== String(action.data));
      break;
    }
    case 'ASC': {
      newState = state.toSorted((a, b) => b.createdDate - a.createdDate);
      break;
    }
    case 'DESC': {
      newState = state.toSorted((a, b) => a.createdDate - b.createdDate);
      break;
    }
    case 'INIT': {
      return action.data;
    }
    default:
      return state;
  }

  localStorage.setItem('diary', JSON.stringify(newState));

  return newState;
};
