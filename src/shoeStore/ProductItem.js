import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    console.log(this.props.shoe)

    let { shoe, addToCart } = this.props
    let { image, name, price } = shoe

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
        </div>
      </div>
    )
  }
}