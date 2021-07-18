import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Salman Khan',
    email: 'salman@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Samarth Agarwal ',
    email: 'smarth@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
