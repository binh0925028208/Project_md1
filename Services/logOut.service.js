function onLogOut() {
  let popUp = "Are you sure you want to logout ?";
  if (confirm(popUp) == true) {
    let userLogOutData = JSON.parse(localStorage.getItem("userStillLogin"));
    userLogOutData = [];
    localStorage.setItem("userStillLogin", JSON.stringify(userLogOutData));
  } else {
    popUp = "Have a nice day!";
  }
}
