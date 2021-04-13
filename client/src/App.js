import React from "react";
import Modal from "react-modal";
import Axios from "axios";

import NavbarUI from "./Navbar";
import Clothing from "./Clothing";
import About from "./About";
import Accessories from "./Accessories";
import Footer from "./Footer";

function App() {
  const [isCartOpen, setIsCartModalOpen] = React.useState(false);
  const [CartList, setCartList] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [ClothesList, setClothesList] = React.useState([]);
  const [AccessoriesList, setAccessoriesList] = React.useState([]);

  React.useEffect(() => {
    Axios.get("http://localhost:5001/enj/clothes").then((response) => {
      let list1 = [];
      let list2 = [];

      for (let i = 0; i < response.data.length; i++) {
        if (i <= 11) {
          list1 = [...list1, response.data[i]];
        } else {
          list2 = [...list2, response.data[i]];
        }
      }

      setClothesList(list1);
      setAccessoriesList(list2);
    });
  }, []);

  React.useEffect(() => {
    let c = 0;

    for (let i = 0; i < CartList.length; i++) {
      c += CartList[i].price;
    }

    setTotalCount(c);
  }, [isCartOpen, CartList]);

  return (
    <div className="App">
      <NavbarUI
        props={{
          isCartOpen: isCartOpen,
          setIsCartModalOpen: setIsCartModalOpen,
          CartList: CartList,
        }}
      />

      <Modal
        isOpen={isCartOpen && CartList.length !== 0}
        onRequestClose={() => setIsCartModalOpen(!isCartOpen)}
        ariaHideApp={false}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "80px",
            left: "200px",
            right: "200px",
            bottom: "80px",
            border: "2px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "3px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="card my-4 p-3">
              <div class="row main">
                <div class="col-12">
                  <h2>Shopping Cart</h2>
                </div>
              </div>
              <form class="form-card">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      {" "}
                      <input
                        type="text"
                        class="form-control p-0"
                        id="number"
                        required
                      />
                      <label class="form-control-placeholder p-0" for="number">
                        CardNumber
                      </label>{" "}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      {" "}
                      <input
                        type="text"
                        class="form-control p-0"
                        id="name"
                        required
                      />
                      <label class="form-control-placeholder p-0" for="name">
                        Cardholder'sName
                      </label>{" "}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4 col-12">
                    <div class="form-group">
                      {" "}
                      <input
                        type="text"
                        class="form-control p-0"
                        id="sdate"
                        required
                      />
                      <label class="form-control-placeholder p-0" for="sdate">
                        Country
                      </label>{" "}
                    </div>
                  </div>
                  <div class="col-sm-4 col-12">
                    <div class="form-group">
                      {" "}
                      <input
                        type="text"
                        class="form-control p-0"
                        id="expdate"
                        required
                      />
                      <label class="form-control-placeholder p-0" for="expdate">
                        City/Street
                      </label>{" "}
                    </div>
                  </div>
                  <div class="col-sm-4 col-12">
                    <div class="form-group">
                      {" "}
                      <input
                        type="password"
                        class="form-control p-0"
                        id="passw"
                        required
                      />
                      <label class="form-control-placeholder p-0" for="passw">
                        Post Code
                      </label>{" "}
                    </div>
                  </div>
                </div>
                <div class="row lrow mt-4 mb-3">
                  <div class="col-sm-8 col-12">
                    <h3>Total:</h3>
                  </div>
                  <div class="col-sm-4 col-12">
                    <h5>{totalCount}$</h5>
                  </div>
                </div>
                <div class="row mb-2">
                  <div
                    class="col-sm-12"
                    style={{
                      display: "inline-flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <button
                      class="btn btn-primary btn-block"
                      style={{ width: 300, marginRight: 50 }}
                    >
                      Buy
                    </button>
                    <div></div>
                    <button
                      class="btn btn-primary btn-block"
                      style={{
                        width: 300,
                        marginLeft: 20,
                        backgroundColor: "red",
                      }}
                      onClick={() => {
                        setIsCartModalOpen(!isCartOpen);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {CartList.map((item) => {
          return (
            <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3">
              <div class="card single-item" key={item.id}>
                <div class="img-container">
                  <img
                    src={item.img}
                    class="card-img-top accessories-img"
                    alt=""
                    style={{ height: 300 }}
                  />
                  <div class="card-body">
                    <div class="card-text d-flex justify-content-between text-capitalize">
                      <h5 id="item-name"> {item.name}</h5>
                      <span>
                        <i class="fas fa-dollar-sign"></i>
                        {item.price} $
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Modal>

      <div style={{ height: 50 }}></div>
      <Clothing
        props={{
          CartList: CartList,
          setCartList: setCartList,
          ClothesList: ClothesList,
        }}
      />
      <div style={{ height: 50 }}></div>
      <About />
      <div style={{ height: 50 }}></div>
      <Accessories
        props={{
          CartList: CartList,
          setCartList: setCartList,
          AccessoriesList: AccessoriesList,
        }}
      />
      <div style={{ height: 50 }}></div>
      <Footer />
    </div>
  );
}

export default App;
