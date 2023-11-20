function renderAdmin() {
  let usersDB = getAllItems("users");
  let productsDB = getAllItems("products");
  let ordersDB = getAllItems("orders");
  let totalusers = document.getElementById("totalUsers");
  let totalproducts = document.getElementById("totalProducts");
  let totalorders = document.getElementById("totalOrders");
  let totalRevenue = document.getElementById("totalRevenue");
  let totalStock = document.getElementById("totalStock");
  let totalOutStock = document.getElementById("totalOutStocks");
  let totalPrice = 0;
  let totalProductStock = 0;
  let totalProductOutStock = 0;
  ordersDB.forEach((item) => {
    totalPrice += item.totalPayment;
  });
  totalRevenue.innerHTML = "$ " + Number(totalPrice);
  productsDB.forEach((item) => {
    totalProductStock += item.stock;
  });
  totalStock.innerHTML = Number(totalProductStock);
  productsDB.forEach((item) => {
    totalProductOutStock += item.isDelete == 2;
  });
  totalOutStock.innerHTML = Number(totalProductOutStock);

  totalusers.innerHTML = `${usersDB.length}`;
  totalproducts.innerHTML = `${productsDB.length}`;
  totalorders.innerHTML = `${ordersDB.length}`;
}
