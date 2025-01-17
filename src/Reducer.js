export const initialState = {
    cart: [],
    user: null
  };
  
  // Selector
  export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => parseFloat(item.price) + amount, 0);
  
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_Cart":
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
      
      case 'EMPTY_Cart':
        return {
          ...state,
          cart: []
        }
  
      case "REMOVE_FROM_Cart":
        const index = state.cart.findIndex(
          (cartItem) => cartItem.id === action.id
        );
        let newCart = [...state.cart];
  
        if (index >= 0) {
          newCart.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in Cart!`
          )
        }
  
        return {
          ...state,
          Cart: newCart
        }
      
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;