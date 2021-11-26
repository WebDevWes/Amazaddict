import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getProfile } from '../redux/actions/userActions'

export default function Profile({ location, history }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  // Get User Profile from Global State
  const {
    userProfile: { loading, error, profile },
  } = useSelector((state) => state)

  // Get User Login from Global State to check if user is logged in
  // Get User info from Global State
  const {
    userLogin: { userData },
  } = useSelector((state) => state)

  useEffect(() => {
    if (!userData) {
      history.push('/login')
    } else {
      if (!profile.name) {
        dispatch(getProfile('getuser'))
      } else {
        setName(profile.name)
        setEmail(profile.email)
      }
    }
  }, [dispatch, history, userData, profile])

  // Submit handler, dispatches to update profile action
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPass) {
      setMessage('Passwords do not match')
    } else {
      // Dispatch update profile
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}></Form.Control>
          </Form.Group>
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
          <Form.Group controlId='confirmPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm Password'
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}></Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary' className='mt-3'>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  )
}
