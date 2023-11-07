import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Header from "./Components/Header";
import Wishlist from "./Pages/Wishlist";
import Pnf from "./Pages/Pnf";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/wishlists" element={<Wishlist></Wishlist>}></Route>
        <Route path="*" element={<Pnf></Pnf>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
