function renderAdmin() {
  let usersDB = getAllItems("users");
  let productsDB = getAllItems("products");
  let ordersDB = getAllItems("orders");
  let totalUsers = document.getElementById("totalUsers");
  let totalProducts = document.getElementById("totalProducts");
  let totalOrders = document.getElementById("totalOrders");
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
    totalProductStock += +item.stock;
  });
  totalStock.innerHTML = totalProductStock;

  productsDB.forEach((item) => {
    totalProductOutStock += item.isDelete == 2;
  });
  totalOutStock.innerHTML = Number(totalProductOutStock);

  totalUsers.innerHTML = `${usersDB.length}`;
  totalProducts.innerHTML = `${productsDB.length}`;
  totalOrders.innerHTML = `${ordersDB.length}`;
}
