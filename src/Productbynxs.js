import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Productcard from "./Productcard";
const Productbynsx=({addtocart}) =>{
    const { nsx_name } = useParams();
    const [products, setproduct] = useState([])
    const fetchdetail = () => {
        fetch(`https://localhost:44318/api/nhasanxuat/nsx/${nsx_name}`)
            .then(res => res.json())
            .then(data => setproduct(data)
            )
    };
    useEffect(() => {
        fetchdetail();
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
export default Productbynsx;