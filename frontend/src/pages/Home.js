import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

export default function Home() {
  return (
    <>
      <h1 className='mt-3'>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={12} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}
