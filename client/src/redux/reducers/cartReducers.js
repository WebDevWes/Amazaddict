import { CART_ADD_PRODUCT } from '../constants/cartConstants'

// Initial State for cart
const initialState = {
  cartProducts: [],
}

// Add product to cart, if product already exists just returns
export const cart = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      const product = action.payload
      const existProduct = state.cartProducts.find(
        (x) => x.product === product.product
      )

      if (existProduct) {
        return {
          ...state,
          cartProducts: state.cartProducts.map((x) =>
            x.product === existProduct.product ? product : x
          ),
        }
      } else {
        return {
          ...state,
          cartProducts: [...state.cartProducts, product],
        }
      }
    default:
      return state
  }
}
