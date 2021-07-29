import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productList } from './reducers/productReducers'

// Combine multiple Reducers into one
const reducer = combineReducers({
  productList,
})

// Initial State for store
const initialState = {}

// Applying middlware into composeWithDevTools
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
