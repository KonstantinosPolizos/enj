import React from "react";
import AddModal from "./AddModal";

const Accessories = (props) => {
  const CartList = props.props.CartList;
  const setCartList = props.props.setCartList;
  const AccessoriesList = props.props.AccessoriesList;
  const [showMore, setShowMore] = React.useState(false);
  const [tempList, setTempList] = React.useState([]);
  const [tempItem, setTempItem] = React.useState({});
  const [showAddModal, setShowAddModal] = React.useState(false);

  React.useEffect(() => {
    if (3 <= AccessoriesList.length) {
      setTempList([AccessoriesList[0], AccessoriesList[1], AccessoriesList[2]]);
    } else {
      setTempList(AccessoriesList);
    }
  }, [showMore, AccessoriesList]);

  return (
    <section id="accessories" class="accessories py-5">
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto col-sm-6 text-center">
            <h1
              class="text-capitalize accessories-title"
              style={{ textShadow: "2px 2px" }}
            >
              Accessories
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

        <div class="row accessories-items" id="accessories-items">
          {showMore
            ? AccessoriesList.map((item) => {
                return (
                  <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3">
                    <div class="card single-item" key={item.id}>
                      <div class="img-container">
                        <img
                          src={item.img}
                          class="card-img-top accessories-img"
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
              })
            : tempList.map((item) => {
                return (
                  <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3">
                    <div class="card single-item" key={item.id}>
                      <div class="img-container">
                        <img
                          src={item.img}
                          class="card-img-top accessories-img"
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
                <a href="#accessories">Show More</a>
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
                <a href="#accessories">Show Less</a>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessories;
