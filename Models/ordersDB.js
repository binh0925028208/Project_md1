const orders = [
  {
    date: "ngày thanh toán",
    id: 1,
    idUsers: 1,
    fullName: "aa",
    address: "22a",
    phoneNumber: "23123123",
    cart: [],
    totalPrice: 121,
    status: 1, //1 là đã nhận đơn, 2 là đang giao, 3 là thành công
    payment: 1, //1 là thanh toán khi nhận hàng, 2 là thanh toán trực tuyến
  },
];
// if (!JSON.parse(localStorage.getItem("orders"))) {
//   localStorage.setItem("orders", JSON.stringify(orders));
// }
