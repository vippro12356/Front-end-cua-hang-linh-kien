import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
const Detail=({addtoCart})=> {
    const { name } = useParams();
    const [products, setproduct] = useState([])
    const fetchdetail = () => {
        fetch(`https://localhost:44318/api/sanpham/${name}`)
            .then(res => res.json())
            .then(data => setproduct(data)
            )
    };
    useEffect(() => {
        fetchdetail();
    }, []);
    return (
        <div >
            {products.map(product =>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4 ">
                      <img src={require(`./img/${product.img}`)} alt={product.pro_name} width="430" height="400"></img>  
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 border-right">
                        <p></p>
                        <h2>{product.pro_name}</h2>
                        <h3>Gía: {product.price}đ</h3>
                        <p></p>
                        <button className="btn btn-primary" onClick={()=>addtoCart(product)}>Thêm vào giỏ</button>
                    </div>                 
                    <div className="col-md-2"></div>
                </div>
            )}
        </div>
    )
}
export default Detail;