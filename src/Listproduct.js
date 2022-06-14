import React from "react";
import Productcard from './Productcard'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";
const Listproduct = ({addtoCart}) => {
    const [products, setproducts] = useState([]);
    const [loaisps, setloaisps] = useState([]);
    const [nsxs, setnsxs] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [productperPage, setproductperPage] = useState(8);
    const fetchproduct = () => {
        fetch(`https://localhost:44318/api/sanpham`)
            .then(res => res.json())
            .then(data => setproducts(data)
            )
    }
    const fetchtype = () => {
        fetch(`https://localhost:44318/api/loaisp`)
            .then(res => res.json())
            .then(data => setloaisps(data)
            )
    }
    const fetchnxs = () => {
        fetch(`https://localhost:44318/api/nhasanxuat`)
            .then(res => res.json())
            .then(data => setnsxs(data)
            )
    }
    const pages = [];
    for (let i = 1; i <= Math.ceil(products.length / productperPage); i++) {
        pages.push(i);
    }
    const nextpage = () => {
        setcurrentPage(currentPage + 1);
    }
    const prevpage = () => {
        setcurrentPage(currentPage - 1);
    }
    useEffect(() => {
        fetchproduct();
        fetchnxs();
        fetchtype();
    }, []);
    const indexlastproduct = currentPage * productperPage;
    const indexfirstproduct = indexlastproduct - productperPage;
    const currenProducts = products.slice(indexfirstproduct, indexlastproduct)
    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-2">
                <div>
                    <h4>Loại sản phẩm</h4>
                    {loaisps.map(loaisp =>
                        <div>
                            <Link className="default-link" to={`/type/${loaisp.pro_type_name}`}>{loaisp.pro_type_name}</Link>
                            <p></p>
                        </div>
                    )
                    }
                </div>
                <div>
                    <h4>Hãng</h4>
                    {
                        nsxs.map(nsx =>
                            <div>
                                <Link className="default-link" to={`/nxs/${nsx.nsx_name}`}>{nsx.nsx_name}</Link>
                                <p></p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="col-md-8">
                <div className="row">
                    {currenProducts.map(product =>
                        <Productcard
                            product={product}
                            addtoCart={addtoCart}
                        />
                    )}
                </div>
                <ul className="col text-center">
                    <button disabled={currentPage == pages[0] ? true : false} type="button" className="btn btn-primary center" onClick={prevpage}>prev</button>
                    <button disabled={currentPage == pages[pages.length - 1] ? true : false} type="button" className="btn btn-primary" onClick={nextpage}>next</button>
                </ul>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
}
export default Listproduct;