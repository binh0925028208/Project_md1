function renderAdminTotalBody() {
  const headerContent = document.getElementById("header");
  const adminSideMenu = document.getElementById("admin_side_menu");
  headerContent.innerHTML = `<div class="header_box1">
  <!-- <a href="http://127.0.0.1:5500/index.html" class="header_symbol"></a> -->
  <div class="header_select">
    <select name="pages" id="select">
      <option value="pages">Loading...</option>
      <option value="login">Loading...</option>
      <option value="product">Loading...</option>
    </select>
  </div>
  <div class="header_select">
    <select name="pages" id="select">
      <option value="pages">Loading...</option>
      <option value="login">Loading...</option>
      <option value="product">Loading...</option>
    </select>
  </div>
  <div class="header_select">
    <select name="pages" id="select">
      <option value="pages">Loading...</option>
      <option value="login">Loading...</option>
      <option value="product">Loading...</option>
    </select>
  </div>
</div>
<div class="header_box2">
  <!-- <div class="header_box2_icon">
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <div class="header_box2_icon">
    <i class="fa-solid fa-bell"></i>
  </div>
  <div class="header_box2_icon">
    <i class="fa-solid fa-gear"></i>
  </div>
  <div class="header_box2_icon">
    <i class="fa-solid fa-cart-plus"></i>
  </div>
  <div class="header_box2_icon">
    <i class="fa-solid fa-earth-americas"></i>
  </div> -->
  <div class="header_box2_text" id="admin_avatar">
    <p>Hello</p>
    <p class="admin_avatar">B</p>
    <div id="logOutAdmin" onclick="LogoutAdmin()">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
    </div>
  </div>
</div>`;
  adminSideMenu.innerHTML = `
  <button class="dashboard" onclick="onDashBoard()">
  <a
    href="http://127.0.0.1:5500/Pages/adminpage/ad.html"
    class="dashBoard_minibox"
    class="sideIndex"
  >
    <p>Dashboard</p>
  </a>
</button>
<div class="custom_board">
  <h2>PAGES</h2>
  <a
    href="http://127.0.0.1:5500/Pages/adminpage/adminUser.html"
    class="mini_box"
    onclick="onUserBoard()"
  >
    <img src="/assets/admin_img/Box3.png" alt="" />
    <p>User</p>
  </a>
  <a
    href="http://127.0.0.1:5500/Pages/adminpage/adminProducts.html"
    class="mini_box"
    onclick="onProductsBoard()"
  >
    <img src="/assets/admin_img/Barcode read.png" alt="" />
    <p>Product</p>
  </a>
  <a
    href="http://127.0.0.1:5500/Pages/adminpage/admiOrders.html"
    class="mini_box"
    onclick="onOrdersBoard()"
  >
    <img src="/assets/admin_img/Compiling.png" alt="" />
    <p>Orders</p>
  </a>
</div>
<div class="custom_board">
  <h2>Loading...</h2>
  <div class="mini_box">
    <img src="/assets/admin_img/Settings.png" alt="" />
    <p>Loading...</p>
  </div>
  <div class="mini_box">
    <img src="/assets/admin_img/Library.png" alt="" />
    <p>Loading...</p>
  </div>
</div>
<div class="custom_board">
  <h2>Loading...</h2>
  <div class="mini_box">
    <img src="/assets/admin_img/Layout-Vertical.png" alt="" />
    <p>Loading...</p>
  </div>
  <div class="mini_box">
    <img src="/assets/admin_img/Layout-left-panel-2.png" alt="" />
    <p>Loading...</p>
  </div>
  <div class="mini_box">
    <img src="/assets/admin_img/Layout-horizontal.png" alt="" />
    <p>Loading...</p>
  </div>
</div>
<div class="custom_board">
  <h2>Loading...</h2>
  <div class="mini_box">
    <img src="/assets/admin_img/Box3.png" alt="" />
    <p>Loading...</p>
  </div>
  <div class="mini_box">
    <img src="/assets/admin_img/Pictures.png" alt="" />
    <p>Loading...</p>
  </div>
  <div class="mini_box">
    <img src="/assets/admin_img/Mirror.png" alt="" />
    <p>Loading...</p>
  </div>
  <div class="mini_box">
    <img src="/assets/admin_img/Attachment 2.png" alt="" />
    <p>Loading...</p>
  </div>
</div>`;
}
function renderAvatarAdmin() {
  const adminLoginData = getAllItems("adminStillLogin");
  const avatar = document.getElementById("admin_avatar");
  const adminName = adminLoginData.fullName;
  let adminNameArray = adminName.split("");
  avatar.innerHTML = `
  <p>Hello</p>
    <p class="admin_avatar">${adminNameArray[0]}</p>
    <div id="logOutAdmin" onclick="LogoutAdmin()">
    <button onclick="onLogOutAdmin()"><i class="fa-solid fa-right-from-bracket"></i></button> </div>`;
}

function onLogOutAdmin() {
  let popUp = "Are you sure you want to logout ?";
  if (confirm(popUp) == true) {
    let adminLogOutData = JSON.parse(localStorage.getItem("adminStillLogin"));
    adminLogOutData = [];
    localStorage.setItem("adminStillLogin", JSON.stringify(adminLogOutData));
    window.location.href =
      "http://127.0.0.1:5500/Pages/loginAdmin/loginAdmin.html";
  }
}
