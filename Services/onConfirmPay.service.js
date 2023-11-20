function onConfirmPay() {
  let popUp = "Are you sure your information are correct ?";
  if (confirm(popUp) == true) {
    let userStillLoginDB = getAllItems("userStillLogin");
    let usersDB = getAllItems("users");
    let productsDB = getAllItems("products");
    let ordersDB = getAllItems("orders");
    let address = document.getElementById("user_address").value;
    let userAfterFind = usersDB.find((item) => item.id == userStillLoginDB.id);
    let userCart = userAfterFind.cart;
    let date = new Date();
    let dateNow =
      date.getDate() + "/" + (+date.getMonth() + 1) + "/" + date.getFullYear();
    let totalPrice = document.getElementById("totalPriceOfCart").innerText;
    if (address.length >= 10) {
      if (totalPrice > 0) {
        // ---------- push dữ liệu order lên bộ nhớ orders
        ordersDB.push({
          date: dateNow,
          id: ordersDB[ordersDB.length - 1].id + 1,
          userId: userAfterFind.id,
          fullName: userAfterFind.fullName,
          email: userAfterFind.email,
          number: userAfterFind.number,
          address: address,
          payment: 1,
          totalPayment: Number(totalPrice),
          cart: userCart,
          role: 2,
          status: 1,
        });

        localStorage.setItem("orders", JSON.stringify(ordersDB));
        // -----------giảm stock của vật phẩm trong cart user

        productsDB.forEach((item, index) => {
          userCart.forEach((itemCart, index) => {
            if (item.id == itemCart.id) {
              item.stock -= itemCart.quantity;
            }
          });
        });
        localStorage.setItem("products", JSON.stringify(productsDB));

        // -----------chuyển đổi cart của user thành mảng rỗng
        userAfterFind.cart = [];
        let indexOfUser = usersDB.findIndex(
          (item) => item.id == userAfterFind.id
        );
        usersDB[indexOfUser] = userAfterFind;
        localStorage.setItem("users", JSON.stringify(usersDB));
        window.location.href = "http://127.0.0.1:5500/index.html";
      } else {
        alert("Your cart is empty !");
      }
    } else {
      alert("your address is not detail enough !");
    }
  }
}
