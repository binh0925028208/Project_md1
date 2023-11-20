function loginSubmit() {
  let email = document.getElementById("admin_email");
  let password = document.getElementById("admin_pass");
  let usersLoginData = getAllItems("users");
  let adminStillLoginData = getAllItems("adminStillLogin");
  let checkLogin = usersLoginData.find((item) => {
    return (
      item.email == email.value &&
      item.password == password.value &&
      item.role == 1
    );
  });
  if (checkLogin) {
    if (checkLogin.role == 1) {
      if (checkLogin.status == 1) {
        adminStillLoginData = checkLogin;
        localStorage.setItem(
          "adminStillLogin",
          JSON.stringify(adminStillLoginData)
        );
        window.location.href = "http://127.0.0.1:5500/Pages/adminpage/ad.html";
      } else {
        alert("this account is banned, please contract us !");
      }
    } else {
      alert("Email/ password is not correct, please try again");
    }
  } else {
    alert("you are not admin !");
  }
}
