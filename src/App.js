
import Listproduct from './Listproduct';
import Navbar from './Navbar';
import Cardimg from './Cardimg';
import Detail from './Detail';
import Productbytype from './Productbytype';
import Footer from './Footer';
import React from 'react';
import "./components/Footer.css"
import Productbynsx from './Productbynxs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import { useState } from 'react';
import Checkout from './Checkout';
import Searchproduct from './Searchproduct';
import { Cartitem } from './CartItem';
const App = () => {
  const [cart, setcart] = useState([]);
  const addtoCart = (item) => {
    const check = cart.every(i => {
      return i.id !== item.id
    })
    if (check) {
      const cartitem=new Cartitem(item.id,item.amount,item.price,item.pro_name,item.img)
      setcart([...cart, cartitem])
      alert("Đã thêm sản phẩm vào giỏ hàng")
    }
    else {
      alert("Sản phẩm đã có trong giỏ hàng")
    }
    console.log(cart)
  }
  const change = (item, sl) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].amount += sl;
    if (arr[index].amount === 0) arr[index].amount = 1;
    setcart([...arr]);
  }
  return (
    <BrowserRouter>
<div style={{backgroundColor: "#8c8d91"}}>
    <div className="page-container">
      <div className="content-wrap">
          <Navbar cart={cart} />
          <Cardimg />
          <Routes>
            <Route path='/' element={<Listproduct addtoCart={addtoCart} />} />
            <Route path='/list' element={<Listproduct addtoCart={addtoCart} />} />
            <Route path='/detail/:name' element={<Detail addtoCart={addtoCart} />} />
            <Route path='/type/:type_name' element={<Productbytype addtoCart={addtoCart} />} />
            <Route path='/nxs/:nsx_name' element={<Productbynsx addtocart={addtoCart} />} />
            <Route path='/cart' element={<Cart cart={cart} setcart={setcart} change={change} />} />
            <Route path='/checkout' element={<Checkout cart={cart} setcart={setcart} />} />
            <Route path='/search/:name' element={<Searchproduct addtocart={addtoCart} />} />
          </Routes>
        </div>
        <Footer/>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
