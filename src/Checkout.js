import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Checkout = ({ cart,setcart}) => {
    const [totalprice, settotalprice] = useState(0);
    const [Hoten, setHoten] = useState("");
    const [Diachi, setDiachi] = useState("");
    const [SDT, setSDT] = useState("");
    const [Email, setEmail] = useState("");
    const gettotalprice = () => {
        let total = 0;
        cart.map((item) => (total += item.amount * item.price));
        settotalprice(total);
    };
    useEffect(() => {
        gettotalprice();
    });
    const handlename = (fullname) => {
        setHoten(fullname);
    }
    const handleaddress = (add) => {
        setDiachi(add);
    }
    const handlesdt = (num) => {
        setSDT(num);
    }
    const handleemail = (em) => {
        setEmail(em);
    }
    const add_click=(cart,setcart,totalprice)=>{
        fetch('https://localhost:44318/api/order',
        {
            method:'POST',
            headers:
            {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Hoten:Hoten,
                Diachi:Diachi,
                SDT:SDT,
                Email:Email,
                Sanpham:cart,
                Tongtien:totalprice
            })
        }
        ).then(res=>res.json()).then((result)=>{
            alert(result);
        })
        console.log(cart);
        setcart([]);
    }
    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
                <h3>Thông tin giao hàng</h3>
                <form>
                    <div className="form-group">
                        <input type="text" value={Hoten} onChange={(e) => { handlename(e.target.value) }} className="form-control" placeholder="Họ và tên"></input>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <input type="text" value={Diachi} onChange={(e) => { handleaddress(e.target.value) }} className="form-control" placeholder="Địa chỉ"></input>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <input type="text" value={SDT} onChange={(e) => { handlesdt(e.target.value) }} className="form-control" placeholder="SĐT"></input>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <input type="text" value={Email} onChange={(e) => { handleemail(e.target.value) }} className="form-control" placeholder="Email"></input>
                    </div>
                    <p></p>
                    <div className="text-end">
                        <Link to="/" className="btn btn-primary" onClick={()=>add_click(cart,setcart,totalprice)}>Đặt hàng</Link>
                    </div>
                </form>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <h3>Sản phẩm</h3>
                <table className="table">
                    <tbody>
                        {cart.map(cartitem =>
                            <tr key={cartitem.id}>
                                <td className="text-center">
                                    <img src={require(`./img/${cartitem.img}`)} height="100" width="100">
                                    </img>
                                </td>
                                <td className="text-center">{cartitem.pro_name}</td>
                                <td className="text-center">{cartitem.amount}x{cartitem.price}đ</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="text-end">
                    <h5>Tổng tiền:{totalprice}</h5>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
}
export default Checkout;