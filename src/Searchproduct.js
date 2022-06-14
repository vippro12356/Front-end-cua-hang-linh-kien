import React from "react";
import { useParams } from "react-router-dom";
import Productcard from "./Productcard";
import { useState, useEffect } from "react";
const Searchproduct = ({ addtocart }) => {
    const { name } = useParams();
    const [products, setproducts] = useState([]);
    const fetchproduct = () => {
        fetch(`https://localhost:44318/api/sanpham/search/${name}`)
            .then(res => res.json())
            .then(data => setproducts(data))
    };
    useEffect(() => {
        fetchproduct();
    }, []);
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="row">
                    {products.map(product =>
                        <Productcard
                            product={product}
                            addtoCart={addtocart}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
export default Searchproduct;