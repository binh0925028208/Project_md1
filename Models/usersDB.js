const users = [
  {
    id: 1,
    fullName: "Fullname",
    email: "email",
    password: "12222",
    role: 1, //1 là admin, 2 là khách
    status: 1, //1 là active, 2 là block
    cart: [],
  },
];
// if (!JSON.parse(localStorage.getItem("users"))) {
//   localStorage.setItem("users", JSON.stringify(users));
// }
// localStorage.setItem("users", JSON.stringify(users));
