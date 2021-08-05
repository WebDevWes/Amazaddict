import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Col, ListGroup, Row, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'
import Message from '../components/Message'

export default function Cart({ match, history, location }) {
  const dispatch = useDispatch()

  // Brings in product detail from global store
  const { cartProducts } = useSelector((state) => state.cart)

  // Grabs id, quantity from url
  const productId = match.params.id
  const quantity = location.search ? +location.search.split('=')[1] : 1

  // Handler for button to remove from cart
  const removeFromCartHandler = (id) => {
    console.log('removed', id)
    dispatch(removeFromCart(id))
  }

  // Handler for button to checkout
  const checkoutHandler = () => {
    console.log('checkout')
    history.push('/login?redirect=shipping')
  }

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity))
    }
  }, [dispatch, productId, quantity])

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartProducts.length === 0 ? (
          <Message>
            Cart is currently empty, <Link to='/'>Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartProducts.map(
              ({ product, image, name, price, countInStock, quantity }) => (
                <ListGroup.Item key={product}>
                  <Row>
                    <Col md={2}>
                      <Image src={image} alt={name} rounded fluid />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${product}`}>{name}</Link>
                    </Col>
                    <Col md={2}>${price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={quantity}
                        onChange={(e) =>
                          dispatch(addToCart(product, +e.target.value))
                        }>
                        {Array.from(Array(countInStock).keys()).map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='dark'
                        onClick={() => removeFromCartHandler(product)}>
                        <i className='fas fa-trash' />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )
            )}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal (
                {cartProducts.reduce(
                  (accu, product) => accu + product.quantity,
                  0
                )}
                ) items
              </h2>
              $
              {cartProducts
                .reduce(
                  (accu, product) => accu + product.quantity * product.price,
                  0
                )
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartProducts.length === 0}
                onClick={checkoutHandler}>
                Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}
