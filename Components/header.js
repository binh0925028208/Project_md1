function renderHeader() {
  const headerContent = document.getElementById("header");
  headerContent.innerHTML = `<section class="header">
  <div class="header_info">
    <a href="../../index.html" class="header_logo"></a>
    <div class="header_search">
      <div>
        <input
          oninput="searchFeature()"
          type="text"
          placeholder="What are you looking for?"
          class="search_bar"
          id="search_feature"
        />
        <ul id="searchList"></ul>
      </div>
      <a href="#mini_search" class="search_button" onclick="searchClick()">
        <i class="fa-solid fa-magnifying-glass"></i>
      </a>
    </div>
    <div class="header_contract">
      <div class="header_information">
        <i class="fa-regular fa-clock"></i>
        <p>08:00 - 17:00</p>
      </div>
      <div class="header_information">
        <i class="fa-solid fa-phone"></i>
        <p>0123 333 333</p>
      </div>
      </div>
      <div class ="header_user_services">
      <div class="header_border"></div>
      <div class="header_cart">
      <a href="http://127.0.0.1:5500/Pages/addToCart/cart.html"> <i class="fa-solid fa-cart-plus"></i></a>
        <p id="cart_quantity">2</p>
      </div>
      <div class="header_user" id="user_avatar">
      <i class="fa-regular fa-user" onclick="onLogin()"></i>
      </div>
      </div>
      </div>
  <div class="header_nav">
    <div class="nav home">
      <a href="../../index.html">HOME</a>
    </div>
    <div class="nav">
      <a href="#">INTRODUCE</a>
    </div>
    <div class="nav">
      <a href="#">HOW TO BUY</a>
    </div>
    <div class="nav">
    <a href="#">VIDEO CLIP</a>
    </div>
    <div class="nav">
    <a href="#">NEWS</a>
    </div>
    <div class="nav">
    <a href="#">CONTRACT US</a>
    </div>
    </div>
    </section>`;
}
function bodyClick() {
  document.getElementById("searchList").style.display = "none";
}
function searchIdProduct(idOfProduct) {
  window.location.href = `http://127.0.0.1:5500/pages/product/prod.html?id=${idOfProduct}`;
}
function searchFeature() {
  const products = getAllItems("products");
  const searchList = document.querySelector("#searchList");
  const input = document.querySelector("#search_feature");
  if (input.value !== "") {
    document.getElementById("searchList").style.display = "block";
    const searchProducts = products.filter(function (element, index) {
      return element.productName
        .toLowerCase()
        .includes(input.value.toLowerCase());
    });
    searchList.innerHTML = "";
    if (searchProducts.length) {
      searchProducts.forEach(function (element, index) {
        searchList.innerHTML += `<li onclick="searchIdProduct(${element.id})" class="productNameInSearch"=>${element.productName}</li>`;
      });
      // lọc tên trong mục tìm kiếm để render sau khi bấm search
    } else {
      searchList.innerHTML = `<li
      style="
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      This Product unavailable, please try again!
    </li>`;
    }
  } else {
    document.getElementById("searchList").style.display = "none";
  }
}
// search funtion
function searchClick() {
  document
    .querySelector(".store_sort")
    .classList.add("storeSortListAfterSearch");
  document.getElementById("title_product").innerHTML =
    "Product's search-list : ";
  const dataLocal = getAllItems("products");
  const listOfProduct = document.querySelector(".storeSortListAfterSearch");
  const nameProduct = document.querySelectorAll(".productNameInSearch");
  const nameOfProductAfterSearch = [];
  nameProduct.forEach((item) => {
    nameOfProductAfterSearch.push(item.innerHTML);
  });
  listOfProduct.innerHTML = "";
  for (i = 0; i < nameOfProductAfterSearch.length; i++) {
    dataLocal.forEach((item, index) => {
      if (
        item.productName == nameOfProductAfterSearch[i] &&
        item.isDelete == 1
      ) {
        listOfProduct.innerHTML += `
        <div class="store_product">
         <div class="product_img">
                  <img src="../${item.img}" alt="" onclick="searchIdProduct(${item.id})"/>
                  </div>
                  <h4 onclick="searchIdProduct(${item.id})">${item.productName}</h4>
                  <p>${item.price}$</p>
                  <button class="buyBtn" onclick="onAddToCart(${item.id})">ADD TO CART</button>
                  </div>`;
      }
    });
  }
  document.querySelector("#search_feature").value = ``;
}

function onLogin() {
  window.location.href = "http://127.0.0.1:5500/Pages/login/login.html";
}
function onLogOut() {
  let popUp = "Are you sure you want to logout ?";
  if (confirm(popUp) == true) {
    let userLogOutData = getAllItems("userStillLogin");
    userLogOutData = [];
    localStorage.setItem("userStillLogin", JSON.stringify(userLogOutData));
    window.location.reload();
  } else {
    popUp = "Have a nice day!";
  }
}
