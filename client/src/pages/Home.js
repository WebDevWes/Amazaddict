import { Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import products from '../products'

export default function Home() {
  return (
    <>
      <h1 className='mt-3'>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={12} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}
