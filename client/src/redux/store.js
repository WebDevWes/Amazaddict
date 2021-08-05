import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productList, productDetails } from './reducers/productReducers'
import { cart } from './reducers/cartReducers'

// Combine multiple Reducers into one
const reducer = combineReducers({
  productList,
  productDetails,
  cart,
})

// Initial State for store
const initialState = {
  cart: {
    cartProducts: JSON.parse(localStorage.getItem('cartProducts')) || [],
  },
}

// Applying middlware into composeWithDevTools
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
