import React from "react";

const NavbarUI = (props) => {
  const isCartOpen = props.props.isCartOpen;
  const setIsCartModalOpen = props.props.setIsCartModalOpen;
  const CartList = props.props.CartList;
  return (
    <nav
      class="navbar navbar-expand-sm bg-dark navbar-dark"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className="navbar-logo"
        style={{
          marginLeft: 5,
        }}
      >
        <img src="smoke.png" alt="" width="35" height="35" />
        <div class="navbar-brand" style={{ marginLeft: 5 }}>
          Ec Nerce Jeke
        </div>
      </div>

      <div className="navbar-containers" style={{}}>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#products">
              Clothing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about-sec">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#accessories">
              Accessories
            </a>
          </li>
          <li class="nav-item" style={{ marginLeft: 50 }}>
            <button
              class="nav-link"
              style={{
                backgroundColor:
                  CartList.length !== 0 ? "rgb(37, 150, 190)" : "red",
                width: 100,
                height: 40,
                borderRadius: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                setIsCartModalOpen(!isCartOpen);
              }}
            >
              <img
                src="cart.svg"
                alt=""
                width="20"
                height="20"
                style={{ marginBottom: 10 }}
              />
              <i style={{ marginBottom: 40, color: "black" }}>
                {CartList.length}
              </i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarUI;
