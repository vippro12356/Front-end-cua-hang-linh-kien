import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Cart = ({ cart, setcart, change }) => {
    const [totalprice, settotalprice] = useState(0);
    const remove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setcart(arr);
    }
    const handleprice = () => {
        let total = 0;
        cart.map((item) => (total += item.amount * item.price));
        settotalprice(total);
    };
    useEffect(() => {
        handleprice();
    });
    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 row">
                <div className="text-center">
                    <h2 className="text-center">Hiện đang có {cart.length} sản phẩm trong giỏ hàng</h2>
                </div>
                <table className="table">
                    <thead >
                        <tr>
                            <th className="text-center">Img</th>
                            <th className="text-center">Mã sản phẩm</th>
                            <th className="text-center">Tên sản phẩm</th>
                            <th className="text-center">Số lượng</th>
                            <th className="text-center">Gía bán</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(cartitem =>
                            <tr key={cartitem.id}>
                                <td className="text-center">
                                    <img src={require(`./img/${cartitem.img}`)} height="150" width="150">
                                    </img>
                                </td>
                                <td className="text-center">{cartitem.id}</td>
                                <td className="text-center">{cartitem.pro_name}</td>
                                <td className="text-center">
                                    <button className="btn btn-primary" onClick={() => change(cartitem, -1)} disabled={cartitem.amount == 1 ? true : false}>
                                        -</button>
                                    {cartitem.amount}
                                    <button className="btn btn-primary" onClick={() => change(cartitem, +1)} >
                                        +</button>
                                </td>
                                <td className="text-center">{cartitem.price}Đ</td>
                                <td><button className="btn btn-primary" onClick={() => remove(cartitem.id)}>Xóa</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="text-end"><h3>Tổng tiền:{totalprice}Đ</h3></div>
                <div className="button text-end">
                    <Link  to="/checkout" className="btn btn-danger">Thanh toán</Link>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
}
export default Cart;