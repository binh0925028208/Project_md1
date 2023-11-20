function renderFooter() {
  const footerContent = document.getElementById("footer");
  footerContent.innerHTML = `
    <div class="footer_main">
    <div class="footer_box">
      <div class="footer_box_title">
        <h3>GUNDAM UNIVERSE</h3>
      </div>
      <div class="footer_box_infor">
        <p style="color: white">
          Providing best quality of service and product, stay true to vision
          and loyal to customer.
        </p>
        <div class="header_information">
          <i class="fa-regular fa-clock"></i>
          <p>08:00 - 17:00</p>
        </div>
        <div class="header_information">
          <i class="fa-solid fa-phone fa-beat-fade"></i>
          <p>0123 333 333</p>
        </div>
      </div>
    </div>
    <div class="footer_box">
      <div class="footer_box_title">
        <h3>CUSTOMER SERVICES</h3>
      </div>
      <div class="footer_box_infor">
        <a href="#">Introduction</a>
        <a href="#">Contract</a>
        <a href="#">Wholesale policy</a>
        <a href="#">How to buy</a>
      </div>
    </div>
    <div class="footer_box">
      <div class="footer_box_title">
        <h3>OUR POLICIESS</h3>
      </div>
      <div class="footer_box_infor">
        <a href="#">Warranty Policy</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Shipping Policy</a>
        <a href="#">Payment Policy</a>
      </div>
    </div>
    <div class="footer_box">
      <div class="footer_box_infor">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24171.028111594955!2d-74.061972!3d40.775692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2577113d0547b%3A0xbee430e9e50dd3e9!2sNJ%20Motor%20Vehicle%20Commission%20Vehicle%20Inspection%20Station!5e0!3m2!1svi!2sus!4v1698917362055!5m2!1svi!2sus"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
  <div class="footer_border"></div>
  <div class="footer_bottom">
    <p>Copyright 2023 © Gundam Universe</p>
    <div class="footer_bottom_social">
      <p>Follow Us</p>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-tiktok"></i>
      <i class="fa-brands fa-twitter"></i>
    </div>
  </div>
 `;
}
renderFooter();
