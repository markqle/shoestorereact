import React, { Component } from 'react'
import ProductInfo from './ProductInfo'

export default class ProductItem extends Component {
  render() {
    console.log(this.props.shoe)

    let { shoe, addToCart } = this.props
    let { image, name, price, description } = shoe

    return (
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price.toLocaleString()}</p>
          <button className='btn btn-success' data-toggle="modal" data-target="#exampleModal"

            onClick={() => {
              addToCart(shoe)
            }}

          >Thêm giỏ hàng</button>
          <button className='btn btn-dark' data-toggle="modal" data-target="#exampleModal1"
          >Xem Chi Tiết</button>

          {/* Modal xem chi tiet */}
          <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="row mt-5">
                    <div className="col-4">
                      <img className='img-fluid' src={image} alt="" />
                    </div>
                    <div className="col-8">
                      <h2>Chi tiet san pham</h2>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Ten giay </td>
                            <td>{name}</td>
                          </tr>
                          <tr>
                            <td>Gia ban </td>
                            <td>{price}</td>
                          </tr>
                          <tr>
                            <td>Thong tin</td>
                            <td>{description}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}