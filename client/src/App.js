import ProductList from "./pages/ProductList.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct.js";

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
