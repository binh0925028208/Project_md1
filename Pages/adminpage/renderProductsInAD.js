function renderListOfProduct(page = 1) {
  let productsDB = JSON.parse(localStorage.getItem("products"));
  let productsList = document.querySelector(".table_body");
  let currentPage = (page - 1) * 5;
  let result = productsDB.splice(currentPage, 5);
  productsList.innerHTML = "";
  result.forEach((item, index) => {
    if (item.isDelete == 1) {
      productsList.innerHTML += ` <div class="table_info">
    <tr class="table_row" >
    <td>${page === 1 ? `${index + 1} ` : `${index + 1 + 3 * (page - 1)}`}</td> 
      <td><img src="../../${item.img}" width ="180px" height="100px"></td>
      <td><p>${item.productName}</p></td>
      <td><p>${item.stock}</p></td>
      <td><p>$ ${item.price}</p></td>
      <td class="table_edit_btn">
        <button class="toolTip"  onclick="onEditProducts(${item.id})">
          <i class="fa-solid fa-screwdriver-wrench"></i>
          <span class="toolTipText"> Edit/ add new.</span>
        </button>
        <button class="toolTip"  onclick="onStopSellProducts(${item.id})">
        <i class="fa-solid fa-store-slash"></i>
          <span class="toolTipText"> Stop selling.</span>
        </button>
        <button class="toolTip" onclick="onDeleteProducts(${item.id})">
        <i class="fa-solid fa-trash-can"></i>
        <span class="toolTipText"> Delete this product.</span>
        </button>
      </td>
    </tr>
  </div>`;
    } else {
      productsList.innerHTML += ` <div class="table_info" >
    <tr class="table_row" style="text-decoration: line-through;" >
    <td>${page === 1 ? `${index + 1} ` : `${index + 1 + 3 * (page - 1)}`}</td> 
      <td><img src="../../${item.img}" width ="180px" height="100px"></td>
      <td><p>${item.productName}</p></td>
      <td><p>${item.stock}</p></td>
      <td><p>$ ${item.price}</p></td>
      <td class="table_edit_btn">
        <button class="toolTip"  onclick="onEditProducts(${item.id})">
          <i class="fa-solid fa-screwdriver-wrench"></i>
          <span class="toolTipText"> Edit/ add new.</span>
        </button>
        <button class="toolTip"  onclick="onStopSellProducts(${item.id})">
        <i class="fa-solid fa-store-slash"></i>
          <span class="toolTipText"> Stop selling.</span>
        </button>
        <button class="toolTip" onclick="onDeleteProductsBtn(${item.id})">
        <i class="fa-solid fa-trash-can"></i>
        <span class="toolTipText"> Delete this product.</span>
        </button>
      </td>
    </tr>
  </div>`;
    }
  });
}
renderListOfProduct();
// Render number pagination
function renderPageProducts(OnePage, total) {
  let result = Math.ceil(total / OnePage);
  let numberList = document.getElementById("pageProduct");
  numberList.innerHTML = "";
  for (let index = 1; index <= result; index++) {
    numberList.innerHTML += `
    <span onclick="renderListOfProduct(${index})" class="pageIndex">${index}</span>
    `;
  }
}
// Render list number pagination
function renderUiPageProduct() {
  let productsDB = JSON.parse(localStorage.getItem("products"));
  let pagination = document.getElementById("paginationProduct");
  pagination.innerHTML = `
    <div id="pageProduct" class="page">    
    </div>
  `;
  renderPageProducts(5, productsDB.length);
}
renderUiPageProduct();
// ------------------ page render
const list = document.querySelectorAll(".pageIndex");
list.forEach((item, index) => {
  item.addEventListener("click", function () {
    list.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

function onDeleteProductsBtn(id) {
  let popUp = "Are You sure you want to delete this ?";
  if (confirm(popUp) == true) {
    deleteItemById("products", id);
    window.location.reload();
  }
}
function onEditProducts(id) {
  document.getElementById("popup_for_admin").style.display = "block";
  let productDB = getAllItems("products");
  let productAfterFind = productDB.find((item) => item.id == id);
  let popup = document.getElementById("popup_for_admin");
  popup.innerHTML = ` <div class="edit_box">
    <div class="edit_popup">
            <button class="closePopup" onclick="onClosePopupInAdmin()">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <input
              class="input_box"
              type="text"
              id="edit_product_id"
              value ="${productAfterFind.id}"
            />
            <input
              class="input_box"
              type="text"
              id="edit_product_name"
              value ="${productAfterFind.productName}"
            />
            <input
              class="input_box"
              type="text"
              id="edit_product_brand"
              value ="${productAfterFind.brand}"
            />
            <input
            class="input_box"
            type="text"
            id="edit_product_stock"
            value ="${productAfterFind.stock}"
          />
            <input
              class="input_box"
              type="text"
              id="edit_product_price"
              value ="${productAfterFind.price}"
            />
            <input
              class="input_box"
              type="text"
              id="edit_product_name"
              value ="${productAfterFind.brand}"
            />
            <input
              class="input_box"
              type="text"
              id="edit_product_scaleDetail"
              value ="${productAfterFind.scaleDetail}"
            />
            <input
              class="input_box"
              type="text"
              id="edit_product_scale"
              value ="${productAfterFind.scale}"
            />
            <input
              class="input_box"
              type="text"
              id="edit_product_decs"
              value ="${productAfterFind.desc}"
            />
            <input class="input_box" type="file" id="edit_product_img" />
            <div class="editAddBtn">
            <button class="editBtn" onclick="onEditProductBtn(${productAfterFind.id})">
            <p>Edit this product</p>
          </button>
          <button class="addBtn" onclick="onAddProductBtn()">
            <p>Adding new product</p>
          </button>
            </div>
            </div>
            </div>
    `;
}
function onAddProductBtn() {
  let name = document.getElementById("edit_product_name").value;
  let brand = document.getElementById("edit_product_brand").value;
  let stock = document.getElementById("edit_product_stock").value;
  let price = document.getElementById("edit_product_price").value;
  let scaleDetail = document.getElementById("edit_product_scaleDetail").value;
  let scale = document.getElementById("edit_product_scale").value;
  let decs = document.getElementById("edit_product_decs").value;
  let image = document.getElementById("edit_product_img");
  let valueImg = "../Assets/img_product/" + image.files[0].name + "";
  let productsDB = getAllItems("products");
  productsDB.push({
    id: productsDB[productsDB.length - 1].id + 1,
    productName: name,
    price: price,
    brand: brand,
    stock: stock,
    scale: scale,
    scaleDetail: scaleDetail,
    desc: decs,
    img: valueImg,
    isDelete: 1,
  });
  localStorage.setItem("products", JSON.stringify(productsDB));
  window.location.reload();
}
function onEditProductBtn(id) {
  let popUp = "Are you sure you want to edit this product ?";
  if (confirm(popUp) == true) {
    let name = document.getElementById("edit_product_name").value;
    let brand = document.getElementById("edit_product_brand").value;
    let stock = document.getElementById("edit_product_stock").value;
    let price = document.getElementById("edit_product_price").value;
    let scaleDetail = document.getElementById("edit_product_scaleDetail").value;
    let scale = document.getElementById("edit_product_scale").value;
    let decs = document.getElementById("edit_product_decs").value;
    let image = document.getElementById("edit_product_img");
    let valueImg = "../Assets/img_product/" + image.files[0].name + "";
    let productsDB = getAllItems("products");
    let editedProducts = {
      id: id,
      productName: name,
      price: price,
      brand: brand,
      stock: stock,
      scale: scale,
      scaleDetail: scaleDetail,
      desc: decs,
      img: valueImg,
      isDelete: 1,
    };
    let indexOfProduct = productsDB.findIndex((item) => item.id == id);
    productsDB[indexOfProduct] = editedProducts;
    localStorage.setItem("products", JSON.stringify(productsDB));
    window.location.reload();
  }
}

function onClosePopupInAdmin() {
  document.getElementById("popup_for_admin").style.display = "none";
}

function onStopSellProducts(id) {
  let productDB = getAllItems("products");
  let findProduct = productDB.find((item) => item.id == id);
  if (findProduct.isDelete == 1) {
    findProduct.isDelete = 2;
  } else {
    findProduct.isDelete = 1;
  }
  let indexOfUser = productDB.findIndex((item) => item.id == findProduct.id);
  productDB[indexOfUser] = findProduct;
  localStorage.setItem("products", JSON.stringify(productDB));
  window.location.reload();
}
