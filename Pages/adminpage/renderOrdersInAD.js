function renderOrder() {
  let ordersDB = getAllItems("orders");
  let ordersList = document.querySelector(".table_head");
  ordersDB.forEach((item, index) => {
    switch (item.status) {
      case 2:
        item.status = "Shipping...";
        break;
      case 3:
        item.status = "Completed.";
        break;
      case 4:
        item.status = "Canceled.";
        break;
      default:
        item.status = "Working on...";
        break;
    }
    ordersList.innerHTML += `  <div class="table_info">
    <tr class="table_row">
      <td><p>${index}</p></td>
      <td class="table_show_cart">
        <button  class="toolTip" onclick="onShowCart(${item.id})">
          <i class="fa-solid fa-cart-arrow-down"></i>
          <span class="toolTipText"> Showing product's list.</span>
        </button>
      </td>
      <td><p>${item.address}</p></td>
      <td><p>${item.status}</p></td>
      <td><p>$ ${item.totalPayment}</p></td>
      <td class="table_edit_btn">
        <button class="toolTip" onclick="onWorkOrders(${item.id})">
        <i class="fa-solid fa-list-check"></i>
        <span class="toolTipText"> Working on order.</span>
        </button>
        <button class="toolTip"  onclick="onShipOrders(${item.id})">
        <i class="fa-solid fa-truck-fast"></i>
        <span class="toolTipText"> This order is shipping.</span>
      </button>
      <button class="toolTip" onclick="onDoneOrders(${item.id})">
      <i class="fa-solid fa-circle-check"></i>
      <span class="toolTipText"> This order is completed.</span>
    </button>
        <button class="toolTip" onclick="onDeleteOrders(${item.id})">
          <i class="fa-solid fa-trash"></i>
          <span class="toolTipText"> Delete this order.</span>
        </button>
      </td>
    </tr>
  </div>`;
  });
}
function onDeleteOrders(id) {
  let popUp = "Are You sure you want to delete this ?";
  if (confirm(popUp) == true) {
    deleteItemById("orders", id);
    window.location.reload();
  }
}
function onWorkOrders(id) {
  let ordersDB = getAllItems("orders");
  let findOrder = ordersDB.find((item) => item.id == id);
  findOrder.status = 1;
  let indexOfOrder = ordersDB.findIndex((item) => item.id == findOrder.id);
  ordersDB[indexOfOrder] = findOrder;
  localStorage.setItem("orders", JSON.stringify(ordersDB));
  window.location.reload();
}
function onShipOrders(id) {
  let ordersDB = getAllItems("orders");
  let findOrder = ordersDB.find((item) => item.id == id);
  findOrder.status = 2;
  let indexOfOrder = ordersDB.findIndex((item) => item.id == findOrder.id);
  ordersDB[indexOfOrder] = findOrder;
  localStorage.setItem("orders", JSON.stringify(ordersDB));
  window.location.reload();
}
function onDoneOrders(id) {
  let ordersDB = getAllItems("orders");
  let findOrder = ordersDB.find((item) => item.id == id);
  findOrder.status = 3;
  let indexOfOrder = ordersDB.findIndex((item) => item.id == findOrder.id);
  ordersDB[indexOfOrder] = findOrder;
  localStorage.setItem("orders", JSON.stringify(ordersDB));
  window.location.reload();
}
