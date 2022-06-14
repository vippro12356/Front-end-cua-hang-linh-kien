import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
const Navbar = ({ cart }) => {
    const [name,setinput]=useState("");
    const handleinput=(val)=>{
        setinput(val);
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
                <div class="container-fluid">
                    <Link class="navbar-brand text-white" to="/">Pc Masterace</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/list">Trang chủ</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link text-white" to="#">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="#">Contact</Link>
                            </li>
                            <li className="nav-item">sadadasdasdasdassadasdasda</li>
                            <li className="nav-item">
                                <div>
                                    <input type="text" value={name} className="form-control" placeholder="Tên sản phẩm muốn tìm..." onChange={(e)=>{handleinput(e.target.value)}}></input>
                                </div>
                            </li>
                            <li className="nav-item">a</li>
                            <li className="nav-item">
                                <div className="button">
                                    <Link to={`/search/${name}`} className="btn btn-default bg-light">
                                        <i className="fa fa-search "></i>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <div className="button">
                            <Link to="/cart" className="btn btn-default btn-sm bg-light">
                                <i className="fa fa-shopping-cart me-1"></i> Giỏ hàng({cart.length})
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;