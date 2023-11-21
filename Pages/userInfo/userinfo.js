function renderHistory() {
  let userStillLoginDB = getAllItems("userStillLogin");
  let usersDB = getAllItems("users");
  let ordersDB = getAllItems("orders");
  let count = 1;
  let userAfterFind = usersDB.find((item) => item.id == userStillLoginDB.id);
  let historyInfor = document.getElementById("history_of_user");
  ordersDB.forEach((item) => {
    switch (item.status) {
      case 2:
        item.status = "Shipping...";
        break;
      case 3:
        item.status = "Completed.";
        break;
      default:
        item.status = "Working on...";
        break;
    }
    if (item.userId == userAfterFind.id) {
      if (item.status == "Working on...") {
        document.querySelector(".empty_cart_img").style.display = "none";
        historyInfor.innerHTML += `
        <tr class="history_box_data">
        <th class="h_id" id="history_stt"><p>${count}</p></th>
        <th class="h_cart">
        <button onclick="onShowCart(${item.id})"><i class="fa-solid fa-cart-arrow-down"></i></button>
        </th>
        <th class="h_price" id="history_price">
        <p style="color: rgb(34, 34, 205)">$ ${item.totalPayment}</p>
        </th>
        <th class="h_ship">
        <p id="yourShip" style="opacity: 0.5">${item.status}</p>
        </th>
        <th class="h_date" id="history_date"><p>${item.date}</p></th>
        <th class="h_delete"><button onclick="onCancel(${item.id})"><i class="fa-solid fa-rectangle-xmark"></i></button></th>
        </tr>`;
        count++;
      } else {
        if (item.status == "Shipping...") {
          document.querySelector(".empty_cart_img").style.display = "none";
          historyInfor.innerHTML += `
          <tr class="history_box_data">
          <th class="h_id" id="history_stt"><p>${count}</p></th>
          <th class="h_cart">
          <button onclick="onShowCart(${item.id})"><i class="fa-solid fa-cart-arrow-down"></i></button>
          </th>
          <th class="h_price" id="history_price">
          <p style="color: rgb(34, 34, 205)">$ ${item.totalPayment}</p>
          </th>
          <th class="h_ship">
          <p id="yourShip" style="opacity: 0.5">${item.status}</p>
          </th>
          <th class="h_date" id="history_date"><p>${item.date}</p></th>
          <th class="h_delete"><i class="fa-solid fa-truck-arrow-right"></i></th>
          </tr>`;
        } else {
          document.querySelector(".empty_cart_img").style.display = "none";
          historyInfor.innerHTML += `
          <tr class="history_box_data">
          <th class="h_id" id="history_stt"><p>${count}</p></th>
          <th class="h_cart">
          <button onclick="onShowCart(${item.id})"><i class="fa-solid fa-cart-arrow-down"></i></button>
          </th>
          <th class="h_price" id="history_price">
          <p style="color: rgb(34, 34, 205)">$ ${item.totalPayment}</p>
          </th>
          <th class="h_ship">
          <p id="yourShip" style="opacity: 0.5">${item.status}</p>
          </th>
          <th class="h_date" id="history_date"><p>${item.date}</p></th>
          <th class="h_delete"><i class="fa-regular fa-square-check"></i></th>
          </tr>`;
        }
      }
    }
  });
}

function onShowCart(id) {
  document.getElementById("history_box").style.display = "block";
  let ordersDB = getAllItems("orders");
  let findOrder = ordersDB.find((item) => item.id == id);
  let showUpCart = document.getElementById("history_table");
  let findCart = findOrder.cart;
  showUpCart.innerHTML = ``;
  findCart.forEach((item) => {
    showUpCart.innerHTML += `
    <tr id="showUpCartInfor_list">
    <td>
      <img
        src="../${item.img}"
        alt=""
        width="80px"
        onclick="searchIdProduct(${item.id})"
        style="cursor: pointer"
      />
    </td>
    <td>
      <p onclick="searchIdProduct(${item.id})"
      style="cursor: pointer">${item.productName} 
      </p>
    </td>
    <td>
      <p>${item.quantity}</p>
    </td>
    <td>
      <p>${item.brand}</p>
    </td>
    <td>
      <p style="color: rgb(11, 98, 238)">$ ${item.price * item.quantity}</p>
    </td>
  </tr>`;
  });
}
function onClosePopUp() {
  document.getElementById("history_box").style.display = "none";
}
function onCancel(id) {
  let popUp = "Are you sure you want to cancel this order ?";
  if (confirm(popUp) == true) {
    let orderDB = getAllItems("orders");
    let productsDB = getAllItems("products");
    let orderAfterFind = orderDB.find((item) => item.id == id);
    let orderCart = orderAfterFind.cart;
    productsDB.forEach((item, index) => {
      orderCart.forEach((itemCart, index) => {
        if (item.id == itemCart.id) {
          item.stock += itemCart.quantity;
        }
      });
    });
    localStorage.setItem("products", JSON.stringify(productsDB));
    deleteItemById("orders", id);
    window.location.reload();
  }
}
function renderUserInfo() {
  let userStillLoginDB = getAllItems("userStillLogin");
  let usersDB = getAllItems("users");
  let ordersDB = getAllItems("orders");
  let userAfterFind = usersDB.find((item) => item.id == userStillLoginDB.id);
  let orderAfterFind = ordersDB.find(
    (item) => item.userId == userStillLoginDB.id
  );
  let infoOfUser = document.getElementById("user_info_box");
  infoOfUser.innerHTML = `
  <div class="user_avatar_big">
  <img src="../../Assets/img/tải xuống.png" alt="" />
</div>
<div class="user_setting">
  <p>
    <strong>Full Name: </strong>
    </p>
    <p id="fullNameOfUser">${userAfterFind.fullName}</p>
  <p>
    <strong>Email: </strong>
    </p>
    <p id="emailOfUser">${userAfterFind.email}</p>
  <p>
    <strong>Phone Number: </strong>
    </p>
    <p id="numberOfUser">${userAfterFind.number}</p>
    <p>
    <strong>Phone Address: </strong>
    </p>
    <p id="numberOfUser">${orderAfterFind.address}</p>
  <button class="user_button" onclick="onChangeUserInfor()">
    Change your information
  </button>
</div>`;
}
function onChangeUserInfor() {
  document.getElementById("displayShowUpUser").style.display = "block";
  let userStillLoginDB = getAllItems("userStillLogin");
  let usersDB = getAllItems("users");
  let ordersDB = getAllItems("orders");
  let userAfterFind = usersDB.find((item) => item.id == userStillLoginDB.id);
  let orderAfterFind = ordersDB.find(
    (item) => item.userId == userStillLoginDB.id
  );
  let infoOfUser = document.getElementById("displayShowUpUser");
  infoOfUser.innerHTML = `
  <div class="showUpUserInfo">
  <div class="popUpUserInfo">
    <button class="closeUserInfo" onclick="onCloseUserPopup()">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <h3>Your information :</h3>
    <input type="text" id="user_fullName" value="${userAfterFind.fullName}"/>
    <input type="text" id="user_email" value="${userAfterFind.email}" />
    <input type="text" id="user_phoneNumber" value="${userAfterFind.number}"/>
    <input type="text" id="user_address" value="${orderAfterFind.address}"/>
    <input type="password" id="user_password" value="${userAfterFind.password}" style="display: none"/>
    <button onclick="updateUserInfo(${userAfterFind.id})" class="updateYourInfoBtn">
      Update your info
    </button>
  </div>
</div>`;
}
function onCloseUserPopup() {
  document.getElementById("displayShowUpUser").style.display = "none";
}

function updateUserInfo(id) {
  let popUp = "Are you sure you want to change ?";
  if (confirm(popUp) == true) {
    let ordersDB = getAllItems("orders");
    let name = document.getElementById("user_fullName").value;
    let email = document.getElementById("user_email").value;
    let phoneNumber = document.getElementById("user_phoneNumber").value;
    let pass = document.getElementById("user_password").value;
    let address = document.getElementById("user_address").value;
    let usersDB = getAllItems("users");
    ordersDB.forEach((item) => {
      if (item.userId == id) {
        item.address = address;
      }
    });
    localStorage.setItem("orders", JSON.stringify(ordersDB));
    let editedUser = {
      id: id,
      fullName: name,
      cart: [],
      email: email,
      number: phoneNumber,
      password: pass,
      role: 1,
      status: 1,
    };
    let indexOfUser = usersDB.findIndex((item) => item.id == id);
    usersDB[indexOfUser] = editedUser;
    localStorage.setItem("users", JSON.stringify(usersDB));
    window.location.reload();
  }
}
