import React, { Component } from 'react';

export default class Cart extends Component {
  renderCart = () => {
    const { gioHang, deleteCart, changeSL } = this.props;
    return gioHang.map(cartItem => {
      const { id, image, price, soLuong, name } = cartItem;
      return (
        <tr key={`cart${id}`}>
          <td>{id}</td>
          <td>
            <img style={{ width: "50px" }} src={image} alt="" />
          </td>
          <td>{name}</td>
          <td>
            <button onClick={() => { changeSL(id, -1) }} className='btn btn-success'>-</button>
            <span> {soLuong} </span>
            <button onClick={() => { changeSL(id, 1) }} className='btn btn-success'>+</button>
          </td>
          <td>{price.toLocaleString()}</td>
          <td>{(price * soLuong).toLocaleString()}</td>
          <td>
            <button onClick={() => { deleteCart(id) }} className='btn btn-danger'>Xóa</button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Mã sản phẩm</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderCart()}
                </tbody>
              </table>
              <div>Tổng số tiền: {this.props.sumPrice()} </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
