function renderMainProductDetail() {
  const dataLocal = JSON.parse(localStorage.getItem("products"));
  const mainProd = document.querySelector(".prod");
  const sameProduct = document.querySelector(".familiar_product_line");
  let newId = window.location.href.split("=")[1];
  mainProd.innerHTML = "";
  let newProductDetail = dataLocal.find((item) => {
    return item.id == newId;
  });
  mainProd.innerHTML = `
  <div class="prod_main">
    <div class="prod_box1">
      <img src="../${newProductDetail.img}" alt="" />
    </div>
    <div class="prod_infor">
      <h2>${newProductDetail.productName}</h2>
      <div class="prod_miniborder"></div>
      <div class="prod_price">
        <p>${newProductDetail.price} $</p>
      </div>
      <div class="prod_infor_detail">
        <p><strong>Brand:</strong> ${newProductDetail.brand}</p>
        <p><strong>Made in:</strong> japan</p>
        <p><strong>Scale:</strong> ${newProductDetail.scaleDetail}</p>
        <p><strong>Stock:</strong> ${newProductDetail.stock}</p>
        <p><strong>Description:</strong> ${newProductDetail.desc}</p>
        <p>You can pre-order</p>
      </div> 
        <button class="buyBtn" onclick="onAddToCart(${newProductDetail.id})">Add to cart</button>
      <div class="prod_miniborder"></div>
      <div class="pro_tagMenu">
        <a href=""> Gundam/</a>
        <a href=""> ${newProductDetail.scaleDetail}/</a>
      </div>
      <div class="prod_social">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-tiktok"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
    </div>
  </div>`;
  sameProduct.innerHTML = "";
  dataLocal.forEach((item, index) => {
    if (item.id != newId && item.scale == newProductDetail.scale) {
      sameProduct.innerHTML += `
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
renderMainProductDetail();
