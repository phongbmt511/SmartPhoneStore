import React, { Component } from "react";

export default class Cart extends Component {
  handleDeleteCartItem = (id) => {
    this.props.onDeleteCartItem(id);
  };
  render() {
    const { cart, onHandleAmountCartItemChange } = this.props;
    let totalPrice = 0;
    for (const cartItem of cart) {
      totalPrice += cartItem.amount * cartItem.price;
    }
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length > 0 ? (
                      cart.map((cartItem) => {
                        const { id, name, img, price, amount } = cartItem;
                        return (
                          <tr key={id}>
                            <td>{id}</td>
                            <td>
                              <img
                                src={img}
                                style={{
                                  width: "32px",
                                  height: "auto",
                                  objectFit: "cover",
                                }}
                              />
                            </td>
                            <td>{name}</td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={() =>
                                  onHandleAmountCartItemChange(id, -1)
                                }
                                disabled={amount <= 1 ? true : false}
                              >
                                -
                              </button>
                              <span className="mx-2">{amount}</span>
                              <button
                                className="btn btn-primary"
                                onClick={() =>
                                  onHandleAmountCartItemChange(id, +1)
                                }
                              >
                                +
                              </button>
                            </td>
                            <td>{price}</td>
                            <td>{price * amount}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => this.handleDeleteCartItem(id)}
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <p>Không có sản phẩm, vui lòng chọn sản phẩm nhé</p>
                    )}
                    {cart.length > 0 ? (
                      <tr>
                        <td>Tổng tiền : {totalPrice}</td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
                <button type="button" className="btn btn-primary">
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
