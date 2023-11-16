const bannerArray = [
  "./assets/img/banner_01.jpg",
  "./assets/img/banner_02.jpg",
  "./assets/img/banner_03.jpg",
  "./assets/img/banner_04.jpg",
  "./assets/img/banner_05.png",
];
let stt = 0;
setInterval(function () {
  const picOfBanner = document.getElementById("banner_image");
  stt++;
  if (stt >= bannerArray.length) {
    stt = 0;
  }
  picOfBanner.src = bannerArray[stt];
}, 10000);

function nextBtn() {
  const picOfBanner = document.getElementById("banner_image");
  stt++;
  if (stt >= bannerArray.length) {
    stt = 0;
  }
  picOfBanner.src = bannerArray[stt];
}

function prevBtn() {
  const picOfBanner = document.getElementById("banner_image");
  stt--;
  if (stt < 0) {
    stt = bannerArray.length - 1;
    picOfBanner.src = bannerArray[stt];
  } else {
    picOfBanner.src = bannerArray[stt];
  }
}
//  function nút chuyển ảnh
