import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'webdevwes89@gmail.com',
    password: bcrypt.hashSync('asdf1234'),
    isAdmin: true,
  },
  {
    name: 'David Tenant',
    email: '10thDoctor@gmail.com',
    password: bcrypt.hashSync('asdf1234'),
  },
  {
    name: 'Matt Smith',
    email: '11thDoctor@gmail.com',
    password: bcrypt.hashSync('asdf1234'),
  },
]

export default users
