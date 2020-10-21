import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },
  {
    name: "Matt Smith",
    email: "matt@silly.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "David Tennant",
    email: "david@doctor.com",
    password: bcrypt.hashSync("password", 10),
  },
];

export default users;
