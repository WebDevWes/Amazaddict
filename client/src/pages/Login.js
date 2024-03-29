import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../redux/actions/userActions'
import FormContainer from '../components/FormContainer'

export default function Login({ location, history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  // Get User info from Global State
  const {
    userLogin: { loading, error, userData },
  } = useSelector((state) => state)

  // Redirect if already logged in
  const redirect = location.search ? location.search.split('=')[1] : '/'
  useEffect(() => {
    if (userData) {
      history.push(redirect)
    }
  }, [history, userData, redirect])

  // Dispatches login to login action
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
          Log In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}
