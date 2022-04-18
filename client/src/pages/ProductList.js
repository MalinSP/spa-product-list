import { useEffect } from "react";
import Product from "../components/Product.js";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const ProductList = () => {
  const {
    isLoading,
    products,
    getProducts,
    deleteProduct,
    toggleProduct,
    selectedItems,
  } = useAppContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <Header deleteProduct={deleteProduct} selectedItems={selectedItems} />
      <div className='title'>
        <h4>{products.length} products</h4>
      </div>

      <Wrapper className='product-list'>
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              select={product.select}
              {...product}
              deleteProduct={deleteProduct}
              toggleProduct={toggleProduct}
            />
          );
        })}
      </Wrapper>
      <Footer />
    </main>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  display: grid;
  gap: 2rem 1rem;
  justify-items: center;
  max-width: 1170px;
  margin: 0 auto;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default ProductList;
