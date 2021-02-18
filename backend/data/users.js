import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Sayan",
    email: "sayan@admin.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Soumi",
    email: "soumi@admin.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
