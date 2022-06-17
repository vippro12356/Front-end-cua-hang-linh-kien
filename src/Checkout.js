import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
const Checkout = ({ cart,setcart}) => {
    const [totalprice, settotalprice] = useState(0);
    const [Hoten, setHoten] = useState("");
    const [Diachi, setDiachi] = useState("");
    const [SDT, setSDT] = useState("");
    const [Email, setEmail] = useState("");
    const [validatemsg,setvalidatemsg]=useState('');
    const gettotalprice = () => {
        let total = 0;
        cart.map((item) => (total += item.amount * item.price));
        settotalprice(total);
    };
    const validateall=()=>{
        const msg={}
        if(!(SDT.match('[0-9]{10}'))){
            msg.SDT="Vui lòng nhập đúng SĐT"
        }
        else if(isEmpty(SDT)){
            msg.SDT="Vui lòng nhập SĐT"
        }
        if(isEmpty(Email)){
            msg.Email="Vui lòng nhập Email"
        }else if(!isEmail(Email)){
            msg.Email="Vui lòng nhập đúng định dạng Email"
        }
        if(isEmpty(Hoten)){
            msg.Hoten="Vui lòng nhập họ tên"
        }
        if(isEmpty(Diachi)){
            msg.Diachi="Vui lòng nhập địa chỉ"
        }
        setvalidatemsg(msg)
        if(Object.keys(msg).length>0)return false
        return true 
    }

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
        const isvalid=validateall()
        if(!isvalid){
            return
        }
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
                        <p className="text-red-400 text-xs italic">{validatemsg.Hoten}</p>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <input type="text" value={Diachi} onChange={(e) => { handleaddress(e.target.value) }} className="form-control" placeholder="Địa chỉ"></input>
                        <p className="text-red-400 text-xs italic">{validatemsg.Diachi}</p>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <input type="text" value={SDT} onChange={(e) => { handlesdt(e.target.value) }} className="form-control" placeholder="SĐT"></input>
                        <p className="text-red-400 text-xs italic">{validatemsg.SDT}</p>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <input type="text" value={Email} onChange={(e) => { handleemail(e.target.value) }} className="form-control" placeholder="Email"></input>
                        <p className="text-red-400 text-xs italic">{validatemsg.Email}</p>
                    </div>
                    <p></p>
                    <div className="text-end">
                        <button disabled={cart.length==0?true:false} type="button" className="btn btn-primary" onClick={()=>add_click(cart,setcart,totalprice)}>Đặt hàng</button>
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
                                <td className="text-center">{cartitem.amount}x{cartitem.price}Đ</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="text-end">
                    <h5>Tổng tiền:{totalprice}Đ</h5>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
}
export default Checkout;