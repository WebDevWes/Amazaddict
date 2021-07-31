import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listProducts } from '../redux/actions/productActions'
import ProductCard from '../components/ProductCard'
import Message from '../components/Message'
import Loader from '../components/Loader'

export default function Home() {
  // Initialize useDispatch
  const dispatch = useDispatch()

  // Grabs list of products from global state
  const {
    productList: { products, loading, error },
  } = useSelector((state) => state)

  // Fetch product on page load
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1 className='mt-3'>New Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={12} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}
