import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {} from 'react-bootstrap'
import { addToCart } from '../redux/actions/cartActions'
import Message from '../components/Message'

export default function Cart({ match, history, location }) {
  const dispatch = useDispatch()

  // Brings in product detail from global store
  const { cartProducts } = useSelector((state) => state.cart)

  // Grabs id, quantity from url
  const productId = match.params.id
  const quantity = location.search ? +location.search.split('=')[1] : 1

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity))
    }
  }, [dispatch, productId, quantity])

  return <div>I'm a cart!!!</div>
}
