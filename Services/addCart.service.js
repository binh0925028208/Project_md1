function onAddToCart(id) {
  let userStillLoginDB = getAllItems("userStillLogin");
  if (userStillLoginDB.length != 0) {
    document.getElementById("cart_quantity").style.visibility = "visible";
    let usersDB = getAllItems("users");
    let productsDB = getAllItems("products");
    let productsAfterFind = productsDB.find((item) => item.id == id);
    let userAfterFind = usersDB.find((item) => item.id == userStillLoginDB.id);
    let userCart = userAfterFind.cart;
    let cartArray = userCart.findIndex((item) => item.id == id);
    if (cartArray != -1) {
      if (userCart[cartArray].quantity < userCart[cartArray].stock) {
        userCart[cartArray] = {
          ...userCart[cartArray],
          quantity: userCart[cartArray].quantity + 1,
        };
      } else {
        alert("Sorry, we are out of stock");
      }
    } else {
      userCart.push({ ...productsAfterFind, quantity: 1 });
    }
    let cartQuantity = document.getElementById("cart_quantity");
    let count = userCart;
    cartQuantity.innerHTML = `${count.length}`;
    let indexOfUser = usersDB.findIndex((item) => item.id == userAfterFind.id);
    usersDB[indexOfUser] = userAfterFind;
    localStorage.setItem("users", JSON.stringify(usersDB));
  } else {
    window.location.href = "http://127.0.0.1:5500/Pages/login/login.html";
  }
}
