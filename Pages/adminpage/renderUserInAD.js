function renderUsers() {
  let userDB = getAllItems("users");
  let userList = document.querySelector(".table_body");
  userDB.forEach((item, index) => {
    switch (item.status) {
      case 1:
        item.status = "Active";
        break;
      default:
        item.status = "Block";
        break;
    }
    switch (item.role) {
      case 1:
        item.role = "ADMIN";
        break;
      default:
        item.role = "USER";
        break;
    }
    userList.innerHTML += ` <div class="table_info">
    <tr class="table_row">
      <td><p>${index}</p></td>
      <td><p>${item.fullName}</p></td>
      <td><p>${item.role}</p></td>
      <td><p>${item.status}</p></td>
      <td class="table_edit_btn">
      <button class="toolTip" onclick="onAddAdmin(${item.id},event)">
      <i class="fa-solid fa-id-card"></i>
      <span class="toolTipText"> Become admin/ user.</span>
      </button>
        <button class="toolTip"  onclick="onEditUsers(${item.id},event)">
        <i class="fa-solid fa-user-lock"></i>
        <span class="toolTipText"> Block/ unblock.</span>
        </button>
 
      </td>
    </tr>
  </div>`;
  });
}
//

function onAddAdmin(id, event) {
  let usersDB = getAllItems("users");
  let findUser = usersDB.find((item) => item.id == id);
  if (findUser.role == 1) {
    findUser.role = 2;
  } else {
    findUser.role = 1;
  }
  let indexOfUser = usersDB.findIndex((item) => item.id == findUser.id);
  usersDB[indexOfUser] = findUser;
  localStorage.setItem("users", JSON.stringify(usersDB));
  window.location.reload();
}

function onEditUsers(id, event) {
  let usersDB = getAllItems("users");
  let findUser = usersDB.find((item) => item.id == id);
  if (findUser.status == 1) {
    findUser.status = 2;
  } else {
    findUser.status = 1;
  }
  let indexOfUser = usersDB.findIndex((item) => item.id == findUser.id);
  usersDB[indexOfUser] = findUser;
  localStorage.setItem("users", JSON.stringify(usersDB));
  window.location.reload();
}
