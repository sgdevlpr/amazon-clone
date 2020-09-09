export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //gfdgdfg
      console.log(state.basket);
      console.log(action.item);
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // FGFGFG
      return state;
    default:
      return state;
  }
};

export default reducer;
