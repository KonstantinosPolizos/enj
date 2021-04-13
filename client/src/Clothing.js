import React from "react";
import AddModal from "./AddModal";

const Clothing = (props) => {
  const CartList = props.props.CartList;
  const setCartList = props.props.setCartList;
  const ClothesList = props.props.ClothesList;
  const [showMore, setShowMore] = React.useState(false);
  const [tempList, setTempList] = React.useState([]);
  const [tempItem, setTempItem] = React.useState({});
  const [showAddModal, setShowAddModal] = React.useState(false);

  React.useEffect(() => {
    if (3 <= ClothesList.length) {
      setTempList([ClothesList[0], ClothesList[1], ClothesList[2]]);
    } else {
      setTempList(ClothesList);
    }
  }, [showMore, ClothesList]);

  return (
    <section id="products" class="products py-5">
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto col-sm-6 text-center">
            <h1
              class="text-capitalize product-title"
              style={{ textShadow: "2px 2px" }}
            >
              Clothes
            </h1>
          </div>
        </div>
        <hr style={{ borderTop: "1px solid black" }} />
        <hr style={{ borderTop: "1px solid white" }} />

        <AddModal
          props={{
            showAddModal: showAddModal,
            setShowAddModal: setShowAddModal,
            tempItem: tempItem,
            CartList: CartList,
            setCartList: setCartList,
          }}
        />

        <div class="row product-items" id="product-items">
          {showMore
            ? ClothesList.map((item) => {
                return (
                  <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3">
                    <div class="card single-item" key={item._id}>
                      <div class="img-container">
                        <img
                          src={item.img}
                          class="card-img-top product-img"
                          alt=""
                          style={{
                            height: 300,
                          }}
                          onClick={() => {
                            setShowAddModal(!showAddModal);
                            setTempItem(item);
                          }}
                        />

                        <div class="card-body">
                          <div class="card-text d-flex justify-content-between text-capitalize">
                            <h5 id="item-name"> {item.name}</h5>
                            <span>{item.price} $</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : tempList.map((item) => {
                return (
                  <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3">
                    <div class="card single-item" key={item._id}>
                      <div class="img-container">
                        <img
                          src={item.img}
                          class="card-img-top product-img"
                          alt=""
                          style={{ height: 300 }}
                          onClick={() => {
                            setShowAddModal(!showAddModal);
                            setTempItem(item);
                          }}
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
        </div>

        <div class="row">
          <div class="col-10 mx-auto col-sm-6 text-center">
            {!showMore ? (
              <button
                class="text-capitalize"
                style={{
                  backgroundColor: "white",
                  border: "2px solid black",
                  color: "black",
                  padding: "16px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: 16,
                  margin: "4px 2px",
                }}
                onClick={() => setShowMore(!showMore)}
              >
                <a href="#products">Show More</a>
              </button>
            ) : (
              <button
                class="text-capitalize"
                style={{
                  backgroundColor: "white",
                  border: "2px solid black",
                  color: "black",
                  padding: "16px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: 16,
                  margin: "4px 2px",
                }}
                onClick={() => setShowMore(!showMore)}
              >
                <a href="#products">Show Less</a>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clothing;
