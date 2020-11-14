import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { paymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/checkoutSteps";

export default function Payment(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    props.history.push("/shipping");
  }

  const [payment, setPayment] = useState("PayPal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(paymentMethod(payment));
    props.history.push("/placeorder");
  };

  const dispatch = useDispatch();

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPayment(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}
