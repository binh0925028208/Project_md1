function renderProductCart() {
  let userStillLoginDB = getAllItems("userStillLogin");
  let usersDB = getAllItems("users");
  let userAfterFind = usersDB.find((item) => item.id == userStillLoginDB.id);
  let cartDetail = document.getElementById("cart_list");
  let cartTotal = document.getElementById("totalPriceOfCart");
  let totalPrice = document.getElementById("total_price_of_products");
  let productInCart = userAfterFind.cart;
  let priceOfProduct = 0;
  productInCart.forEach((item) => {
    if (item.quantity > 0) {
      document.getElementById("emptyImg").style.display = "none";
      document.querySelector(".cart_product_head").style.display = "block";
      priceOfProduct += item.price * item.quantity;
      cartDetail.innerHTML += `
                  <tr class="cart_prod">
                      <td class="cart_prod_img">
                        <img src="../${item.img}" alt="" />
                      </td>
                      <td class="cart_prod_name">
                        <p>${item.productName}</p>
                      </td>
                      <td class="cart_prod_quantity">
                      <button onclick="onDownQuantity(${
                        item.id
                      })"><i class="fa-solid fa-chevron-left"></i></button>
                        <button onclick="onChangeQuantity(${
                          item.id
                        })" id="quantityNumber">${item.quantity}</button>
                        <button onclick="onUpQuantity(${
                          item.id
                        })"><i class="fa-solid fa-chevron-right"></i></button>
                      </td>
                      <td class="cart_prod_discount">
                        <input type="text" placeholder="Write here!" />
                      </td>
                      <td class="cart_prod_totalPrice"><p>${
                        item.price * item.quantity
                      }</p>
                     </td>
                     <td> <button class="deleteProduct" onclick="onDeleteThisProduct(${
                       item.id
                     })"><i class="fa-solid fa-trash-can"></i></button></td>
                    </tr>`;
    }
  });
  let listProductNot0 = productInCart.filter(function (it, id) {
    return it.quantity != 0;
  });
  userAfterFind.cart = listProductNot0;
  let indexOfUser = usersDB.findIndex((item) => item.id == userAfterFind.id);
  usersDB[indexOfUser] = userAfterFind;
  localStorage.setItem("users", JSON.stringify(usersDB));
  cartTotal.innerHTML = Number(priceOfProduct);
  totalPrice.innerHTML = "$ " + Number(priceOfProduct);
}
renderProductCart();
// renderProduct-------------------------------------------------------------------------------------------------------------------------
function onDownQuantity(id) {
  let userStillLoginDB = getAllItems("userStillLogin");
  let usersDB = getAllItems("users");
  let userAfterFind = usersDB.find((item) => item.id == userStillLoginDB.id);
  let cart = userAfterFind.cart;
  let cartArray = cart.findIndex((item) => item.id == id);
  if (cartArray != -1 && cart[cartArray].quantity == 1) {
    let popUp = "Are you sure you want to remove this product ?";
    if (confirm(popUp) == true) {
      cart[cartArray] = {
        ...cart[cartArray],
        quantity: cart[cartArray].quantity - 1,
      };
      window.location.reload();
    }
  } else {
    if (cartArray != -1) {
      cart[cartArray] = {
        ...cart[cartArray],
        quantity: cart[cartArray].quantity - 1,
      };
      window.location.reload();
    }
  }
  let indexOfUser = usersDB.findIndex((item) => item.id == userAfterFind.id);
  usersDB[indexOfUser] = userAfterFind;
  localStorage.setItem("users", JSON.stringify(usersDB));
}
// function downQuantity--------------------------------------------------------------------------------------------------------------
function onUpQuantity(id) {
  onAddToCart(id);
  window.location.reload();
}
// function upQuantity--------------------------------------------------------------------------------------------------------------
function onDeleteThisProduct(id) {
  let userStillLoginDB = getAllItems("userStillLogin");
  let usersDB = getAllItems("users");
  let userAfterFind = usersDB.find((item) => item.id == userStillLoginDB.id);
  let cart = userAfterFind.cart;
  let cartArray = cart.findIndex((item) => item.id == id);
  if (cartArray != -1) {
    let popUp = "Are you sure you want to delete this product ?";
    if (confirm(popUp) == true) {
      cart[cartArray] = {
        ...cart[cartArray],
        quantity: (cart[cartArray].quantity = 0),
      };
      window.location.reload();
    }
  }
  let indexOfUser = usersDB.findIndex((item) => item.id == userAfterFind.id);
  usersDB[indexOfUser] = userAfterFind;
  localStorage.setItem("users", JSON.stringify(usersDB));
}

// function onChangeQuantity() {}
