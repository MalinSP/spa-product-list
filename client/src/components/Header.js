import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ deleteProduct, selectedItems }) => {
  return (
    <Wrapper>
      <nav>
        <h3>Product List</h3>
        <div className='btn-container'>
          <Link to='/add-product' type='button' className='btn-add'>
            Add
          </Link>

          <button
            type='button'
            className='btn-delete'
            onClick={() => deleteProduct(selectedItems)}
          >
            Mass Delete
          </button>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn-add {
    background: #474839;
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: #fcfcf2;
    cursor: pointer;
    transition: 0.3s all linear;
    border-radius: 0.25rem;
    font-size: 0.8rem;
    text-decoration: none;
  }
  .btn-delete {
    background: #b35f5f;
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: white;
    cursor: pointer;
    transition: 0.3s all linear;
    border-radius: 0.25rem;
    font-size: 0.8rem;
  }
`;

export default Header;
