// Error Handler to identify when a page does not exist
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

// Error Handler to convert false code 200 to 500
const errorHandler = (err, req, res, next) => {
  const errorCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(errorCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }
