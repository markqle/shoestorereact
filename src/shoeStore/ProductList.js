import React, { Component } from 'react';
import ProductItem from './ProductItem';
import ProductInfo from './ProductInfo';

export default class ProductList extends Component {
    renderShoes = () => {
        const { arrShoe, addToCart } = this.props;
        return arrShoe.map(shoe => {
            return (
                <div className="col-4" key={`shoe${shoe.id}`}>
                    <ProductItem addToCart={addToCart} shoe={shoe} />
                    <ProductInfo shoe={shoe}/>
                </div>
            );
        });
    }

    render() {
        console.log(this.props.arrShoe)
        return (
            <div className="row">
                {this.renderShoes()}
            </div>
        );
    }
}
