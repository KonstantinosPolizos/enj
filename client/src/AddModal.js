import React from "react";
import Modal from "react-modal";

const AddModal = (props) => {
  const showAddModal = props.props.showAddModal;
  const setShowAddModal = props.props.setShowAddModal;
  const tempItem = props.props.tempItem;
  const CartList = props.props.CartList;
  const setCartList = props.props.setCartList;

  return (
    <Modal
      isOpen={showAddModal}
      onRequestClose={() => setShowAddModal(!showAddModal)}
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
          left: "220px",
          right: "350px",
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
      <div class="row mb-2">
        <div
          class="col-sm-12"
          style={{
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src={tempItem.img} alt="" />
          <div className="tapame">
            <h1>{tempItem.name}</h1>
            <h3>{tempItem.price} $</h3>
            <button
              class="btn btn-primary btn-block"
              style={{ width: 250 }}
              onClick={() => {
                let list = CartList;
                setCartList([...list, tempItem]);
                setShowAddModal(!showAddModal);
              }}
            >
              Add to cart
            </button>
            <div style={{ marginTop: 10 }}></div>
            <button
              class="btn btn-primary btn-block"
              style={{ width: 250, backgroundColor: "red" }}
              onClick={() => {
                setShowAddModal(!showAddModal);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddModal;
