import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleProduct from "./components/SingleProduct";
import Categorywise from "./components/Categorywise";
import { useCart } from "./components/CartContext";
import { useEffect } from "react";

function App() {
  const { cartProduct, setCartProduct } = useCart();

  useEffect(() => {
    const storedItem = localStorage.getItem("cartItem");
    if (storedItem) {
      setCartProduct(JSON.parse(storedItem));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartProduct));
  }, [cartProduct]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route
          path="/Categorywise/:category"
          element={<Categorywise />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
