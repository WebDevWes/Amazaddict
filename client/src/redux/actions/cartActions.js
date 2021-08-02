import axios from 'axios'
import { CART_ADD_PRODUCT } from '../constants/cartConstants'

// Action to pass product detail to reducer to be saved in global state
export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const {
    data: { _id, name, image, price, countInStock },
  } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_PRODUCT,
    payload: {
      product: _id,
      name,
      image,
      price,
      countInStock,
      quantity,
    },
  })

  // Save to LocalStorage at the same time
  localStorage.setItem(
    'cartProducts',
    JSON.stringify(getState().cart.cartProducts)
  )
}
