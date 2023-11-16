const list = document.querySelectorAll(".sideIndex");
list.forEach((item, index) => {
  item.addEventListener("click", function () {
    console.log("tesst");
    document.querySelector(".store_sort").classList.add("storeSortList");
    list.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
    renderProducts(item.getAttribute("data"));
  });
});
function renderProducts(modelScale) {
  const dataLocal = getAllItems("products");
  const listOfProduct = document.querySelector(".storeSortList");
  const titleProduct = document.querySelector("#title_product");
  switch (modelScale) {
    case "mg":
      titleProduct.innerText = "Master Grade models :";
      break;
    case "pg":
      titleProduct.innerText = "Perfect Grade models :";
      break;
    case "hg":
      titleProduct.innerText = "High Grade models :";
      break;
    case "rg":
      titleProduct.innerText = "Real Grade models :";
      break;
    case "mb":
      titleProduct.innerText = "Metal Build models :";
      break;
    case "ms":
      titleProduct.innerText = "Mega Size models :";
      break;
    case "rs":
      titleProduct.innerText = "Robot Spirits models :";
      break;
    case "hr":
      titleProduct.innerText = "High Resolution models :";
      break;
    case "sd":
      titleProduct.innerText = "Super Deformed models :";
      break;
    default:
      titleProduct.innerText = "";
      break;
  }

  listOfProduct.innerHTML = "";
  dataLocal.forEach((item, index) => {
    if (item.scale == modelScale && item.isDelete == 1) {
      listOfProduct.innerHTML += `
        <div class="store_product">
        <div class="product_img">
                  <img src="${item.img}" alt="" onclick="searchIdProduct(${item.id})"/>
                  </div>
                  <h4 onclick="searchIdProduct(${item.id})">${item.productName}</h4>
                  <p>${item.price}$</p> 
                  <button class="buyBtn"  onclick="onAddToCart(${item.id})">ADD TO CART</button>
                  </div>`;
    }
  });
}
