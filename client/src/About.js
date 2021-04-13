import React from "react";

const About = () => {
  return (
    <section id="about-sec">
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto col-sm-6 text-center">
            <h1
              class="text-capitalize product-title"
              style={{ textShadow: "2px 2px" }}
            >
              About Us
            </h1>
          </div>
        </div>
        <hr style={{ borderTop: "1px solid black" }} />
        <hr style={{ borderTop: "1px solid white" }} />
        <div class="row align-items-center">
          <div class="col-lg-5 text-center">
            <img
              src="https://i.pinimg.com/564x/ba/3c/09/ba3c09cf2a01009945da540b18312cd7.jpg"
              class="img-fluid watch-img"
              style={{ height: 400, width: 300 }}
              alt=""
            />
          </div>
          <div class="col-lg-7 text-lg-right  text-center text-color about-text">
            <p class="text">
              We are a group of friends and we started this company for those
              who want to sell their clothes and accessories. We developed a
              Second Hand Shop and unfortunately shipping costs are not free...
              But we will be happy if you try our site!!!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
