import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import asyncHandler from 'express-async-handler'

export const authenticate = asyncHandler(async (req, res, next) => {
  let token

  // Checks to see if request contains Bearer Token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Split to get token then verify, find User with decoded ID
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id).select('-password')
      // Proceed if no issues
      next()
    } catch (err) {
      res.status(401)
      throw new Error('Authentication failed, invalid token')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Authentication failed, token not found')
  }
})
