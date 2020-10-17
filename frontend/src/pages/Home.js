import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const responses = async () => {
      await fetch("/api/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    };
    responses();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
