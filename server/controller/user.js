import asyncHandler from 'express-async-handler'
import User from '../models/User.js'
import generateToken from '../utils/token.js'

// Function to Authenticate the User using Email and Password
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    const compare = await user.checkPassword(password)
    if (compare) {
      const { _id, name, email, isAdmin } = user

      res.json({
        _id,
        name,
        email,
        isAdmin,
        token: generateToken(_id),
      })
    } else {
      res.status(401)
      throw new Error('Invalid Password')
    }
  } else {
    res.status(401)
    throw new Error('Invalid Email')
  }
})

// Get User Profile
export const getUser = asyncHandler(async (req, res) => {
  const { _id, name, email, isAdmin } = req.user

  if (_id) {
    res.json({
      _id,
      name,
      email,
      isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
