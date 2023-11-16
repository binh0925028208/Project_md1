function showRegister() {
  document.querySelector(".display_login_box").style.display = "none";
  document.querySelector(".display_register_box").style.display = "block";
}
function showLogin() {
  document.querySelector(".display_register_box").style.display = "none";
  document.querySelector(".display_login_box").style.display = "block";
}
function registerSubmit() {
  let name = document.getElementById("register_name");
  let phone = document.getElementById("register_phone");
  let email = document.getElementById("register_email");
  let password = document.getElementById("register_password");
  let confirmPass = document.getElementById("register_confirmPassword");
  let userData = getAllItems("users");
  let checkingEmail = userData.find((item) => {
    return email.value === item.email;
  });
  if (checkingEmail) {
    alert("This email already registered");
  } else {
    if (password.value !== confirmPass.value) {
      alert("Your Password and confirm-password is not the same");
    } else {
      userData.push({
        id: userData[userData.length - 1].id + 1,
        fullName: name.value,
        email: email.value,
        number: phone.value,
        password: password.value,
        role: 2,
        cart: [],
        status: 1,
      });
      showLogin();
    }
  }
  localStorage.setItem("users", JSON.stringify(userData));
  // let data = JSON.parse(localStorage.getItem("users"));
  // data = [];
  // localStorage.setItem("users", JSON.stringify(data));
}

function loginSubmit() {
  let email = document.getElementById("user_email");
  let password = document.getElementById("user_pass");
  let userLoginData = getAllItems("users");
  let userStillLoginData = getAllItems("userStillLogin");
  let checkLogin = userLoginData.find((item) => {
    return item.email == email.value && item.password == password.value;
  });
  if (checkLogin) {
    userStillLoginData = checkLogin;
    localStorage.setItem("userStillLogin", JSON.stringify(userStillLoginData));
    document.getElementById("cart_quantity").style.visibility = "visible";
    window.location.href = "http://127.0.0.1:5500/index.html";
  } else {
    alert("Email/ password is not correct, please try again");
  }
}
// function loginSubmit() {
//   let data = JSON.parse(localStorage.getItem("userStillLogin"));
//   data = [];
//   localStorage.setItem("userStillLogin", JSON.stringify(data));
// }
// nút xóa dữ liệu login submit
