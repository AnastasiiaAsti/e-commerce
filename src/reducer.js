export const initialState = {
    //   user: null,
    basket: [],
};
  
//Selector

export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => item.price + amount, 0))
}
  
function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
    }
}
  
  export default reducer;