import dotenv from 'dotenv'
// Import Models
import User from './models/User.js'
import Product from './models/Product.js'
import Order from './models/Order.js'
// Import Data to be seeded
import users from './data/users.js'
import products from './data/products.js'
// Import Database Connection
import connectDB from './config/connection.js'

// Initialize .env and Database
dotenv.config()
connectDB()

const importData = async () => {
  try {
    // Delete all current data in database
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // Insert data from ./data folder
    const seedUsers = await User.insertMany(users)
    // Retrieve admin userId to attach to inserted products
    const admin = seedUsers[0]._id
    // Map over products to associate admin to product
    const seedProducts = products.map((product) => ({
      ...product,
      user: admin,
    }))
    await Product.insertMany(seedProducts)

    console.log('Data successfully imported!')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // Delete all current data in database
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data successfully removed!')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
