function renderAvatarUser() {
  const userLoginData = getAllItems("userStillLogin");
  const avatar = document.getElementById("user_avatar");
  const userName = userLoginData.fullName;
  let userNameArray = userName.split("");
  avatar.innerHTML = `
  <a href="http://127.0.0.1:5500/Pages/userInfo/userInfo.html">
  <p class="user_avatar">${userNameArray[0]}</p> 
  </a>
    <button onclick="onLogOut()"><i class="fa-solid fa-right-from-bracket"></i></button>`;
}
