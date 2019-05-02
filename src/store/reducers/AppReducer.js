const AppReducer = (state, action) => {
  switch (action.type) {
    case 'setMap':
      return {
        map: action.map
      };
    default:
      return { state };
  }
};

export default AppReducer;
