import React, { Component, Fragment } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'

export default class ExerciseCart extends Component {

    arrShoe = [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
            "id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
            "id": 3,
            "name": "Adidas Prophere Customize",
            "alias": "adidas-prophere-customize",
            "price": 375,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
            "id": 4,
            "name": "Adidas Super Star Red",
            "alias": "adidas-super-star-red",
            "price": 465,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 542,
            "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
            "id": 5,
            "name": "Adidas Swift Run",
            "alias": "adidas-swift-run",
            "price": 550,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 674,
            "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
            "id": 6,
            "name": "Adidas Tenisky Super Star",
            "alias": "adidas-tenisky-super-star",
            "price": 250,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 456,
            "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
        {
            "id": 7,
            "name": "Adidas Ultraboost 4",
            "alias": "adidas-ultraboost-4",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 854,
            "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
            "id": 8,
            "name": "Adidas Yeezy 350",
            "alias": "adidas-yeezy-350",
            "price": 750,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 524,
            "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        },
        {
            "id": 9,
            "name": "Nike Adapt BB",
            "alias": "nike-adapt-bb",
            "price": 630,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 599,
            "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
        },
        {
            "id": 10,
            "name": "Nike Air Max 97",
            "alias": "nike-air-max-97",
            "price": 650,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 984,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
        },
        {
            "id": 11,
            "name": "Nike Air Max 97 Blue",
            "alias": "nike-air-max-97-blue",
            "price": 450,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 875,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
        },
        {
            "id": 12,
            "name": "Nike Air Max 270 React",
            "alias": "nike-air-max-270-react",
            "price": 750,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 445,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
        }
    ]

    //Khai báo state, gọi setState
    //gioHang mới tạo => chưa có sản phẩm,
    // tạo sản phẩm test => test binding state
    // dữ liệu có thể tính toán từ data có sẵn thì ko cần lưu ở database => thành tiền không lưu ở DB

    state = {
        gioHang: []
    }

    //input san pham đang được click
    //   { id: 1, name: "VinSmart Live", price: 5700000, image: "./img/phone/vsphone.jpg", soLuong: 1 }
    addToCart = (shoeClick) => {
        console.log(shoeClick)
        //nơi gọi setState
        //* tạo đối tượng riêng cho giỏ hàng
        let { id, name, price, image } = shoeClick;
        let cartItem = { id: id, name: name, price: price, image: image, soLuong: 1 }
        let gioHangUpdate = [...this.state.gioHang]

        //Check sản phẩm đã có ở giỏ hàng ko?
        //find(): duyệt mảng, so sánh theo điều kiện tìm => return về obj tìm được
        // let cartFind = this.state.gioHang.find((cartItem) => {
        //     return cartItem.id === shoeClick.id
        // })
        let cartFind = this.state.gioHang.find(cartItem => cartItem.id === shoeClick.id)


        if (cartFind) {
            //có sản phẩm => tăng số lượng
            cartFind.soLuong += 1;
        } else {
            //thêm mới vào mảng
            //* [...copy phần tử từ mảng cũ, thêm phần tử mới]
            //* tạo mảng mới => địa chỉ mới => xử lý vấn đề tham chiếu
            // let gioHangUpdate = [...this.state.gioHang, cartItem]
            gioHangUpdate.push(cartItem);
        }




        //TODO: gọi setState và điền state mới vào
        this.setState({
            gioHang: gioHangUpdate
        })

    }

    //input: mã sản phẩm cần xóa
    deleteCart = (idClick) => {
        console.log(idClick)
        //C1: tìm sp cần xóa (find, findIndex)
        // => splice => xóa dựa vào vị trí

        // [{ id: 1 }, { id: 2 }, { id: 3 }]
        // C2: filter() return mảng mới : điều kiện lọc mảng các sản phẩm giỏ hàng không chứa id cần xóa
        // let gioHangMoi = this.state.gioHang.filter((cartItem) => { 
        //*     // return cartItem.id !== 3
        //     return cartItem.id !== idClick  //[{ id: 1 }, { id: 2 }]
        //  })

        let gioHangMoi = this.state.gioHang.filter(cartItem => cartItem.id !== idClick)

        //TODO: gọi setState
        this.setState({
            gioHang: gioHangMoi
        })

    }

    // sl + 1, sl - 1
    //soLuong => tăng +1, giảm -1; thay đổi sl => cập nhật sản phẩm
    // input: mã sản phẩm cần tăng sl, số lượng tăng hoặc giảm
    changeSL = (idClick, sl) => {
        console.log(idClick, sl)
        // Tìm sp cần đổi số lượng => cập nhật thuộc tính số lượng
        //find() => return obj
        // let gioHang = this.state.gioHang // biến có địa chỉ mới

        let { gioHang } = this.state
        let findItem = gioHang.find((cartItem) => {
            return cartItem.id == idClick
        })

        if (findItem) {
            //tìm thấy
            // soLuong += 1; soLuong += -1 (soLuong -1 )
            findItem.soLuong += sl
            if (findItem.soLuong < 1) {
                alert("Số lượng không được dưới 1")
                // sl= 0 - -1 => 0 + 1 => luôn về 1
                findItem.soLuong -= sl
            }
        }

        //TODO: setState
        this.setState({
            gioHang: gioHang
        })

    }


    sumSL = () => {
        let { gioHang } = this.state
        //reduce
        let totalSL = gioHang.reduce((total, cartItem, index) => {
            return total += cartItem.soLuong
        }, 0)

        return totalSL
    }

    //Khai báo hàm tổng số tiền
    sumPrice = () => {
        let { gioHang } = this.state
        //reduce
        let totalprice = gioHang.reduce((total, cartItem, index) => {
            return total += cartItem.soLuong * cartItem.price
        }, 0)

        return totalprice.toLocaleString()

        // C2
        return this.state.gioHang.reduce((total, cartItem, index) => total += cartItem.soLuong * cartItem.price, 0)

    }


    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">ShoeStore</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <div className='cartGroup' data-toggle="modal" data-target="#exampleModal">
                            Giỏ hàng ({this.sumSL()})
                        </div>
                    </div>
                </nav>

                <div className='Content py-5'>
                    <h2>Danh sách sản phẩm</h2>
                    <ProductList addToCart={this.addToCart} arrShoe={this.arrShoe} />
                </div>

                <Cart sumPrice={this.sumPrice} changeSL={this.changeSL} deleteCart={this.deleteCart} gioHang={this.state.gioHang} />



            </Fragment>
        )
    }
}




// function tinhTong(){
//     let total = 0

//     for ( let cartItem of gioHang) {
//         total += cartItem.soLuong
//     }

//     return total
// }

// function tinhTongTien() {
//     let total = 0

//     for (let cartItem of gioHang) {
//         total += cartItem.soLuong * cartItem.price
//     }

//     return total
// }