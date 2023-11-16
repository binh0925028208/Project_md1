function renderAvatarUser() {
  const userLoginData = getAllItems("userStillLogin");
  const avatar = document.getElementById("user_avatar");
  const userName = userLoginData.fullName;
  let userNameArray = userName.split("");
  avatar.innerHTML = `<p class="user_avatar">${userNameArray[0]}</p> 
    <button onclick="onLogOut()"><i class="fa-solid fa-right-from-bracket"></i></button>`;
}
