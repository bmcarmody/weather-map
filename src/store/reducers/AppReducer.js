const AppReducer = (state, action) => {
  switch (action.type) {
    case 'setMap':
      return {
        map: action.map
      };
    case 'setPosition':
      return {
        ...state,
        position: action.position
      };
    default:
      return { state };
  }
};

export default AppReducer;
