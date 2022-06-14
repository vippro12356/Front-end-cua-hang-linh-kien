import React from "react";
import { Link } from "react-router-dom";
const Productcard=({product,addtoCart})=> {
    return (
        <div className="col-md-3 mb-4">
            <div className="card">
                <Link to={`/detail/${product.pro_name}`}>
                    <img className="card-img-top" src={require(`./img/${product.img}`)} alt={product.pro_name} height="175" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{product.pro_name.substring(0, 25)}</h5>
                    <p className="card-text lead fw-bold">Giá: {product.price}đ</p>
                    <button className="btn btn-primary" onClick={()=>addtoCart(product)}>Thêm vào giỏ</button>
                </div>
            </div>
        </div>
    )
}
export default Productcard;