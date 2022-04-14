import Header from "./components/Header.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddProduct from "./components/AddProduct.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList />}></Route>
        <Route path='/add-product' element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
