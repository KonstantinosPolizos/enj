import React from "react";

const Footer = () => {
  return (
    <footer class="footer mt-5">
      <div class="text-center py-5">
        <div class="row">
          <div class="col-10 mx-auto col-sm-6 text-center">
            <h1
              class="text-capitalize accessories-title"
              style={{ textShadow: "2px 2px" }}
            >
              Contact
            </h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row mb-3">
          <div class="col-lg-8 offset-lg-2 text-center">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img
                src="facebook.png"
                width="30"
                height="30"
                style={{ marginRight: 30 }}
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="instagram.png"
                width="30"
                height="30"
                style={{ marginRight: 30 }}
                alt=""
              />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img
                src="twitter.png"
                width="30"
                height="30"
                style={{ marginRight: 10 }}
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="copyright text-center py-3 border-top text-light">
          <p>&copy; Copyright Ec Nerce Jeke</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
