import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";

const initialState = {
  name: "",
  email: "",
  password: "",
  list: ["DVD", "Dimensions", "Book"],
};
const AddProduct = () => {
  const [values, setValues] = useState(initialState);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const handleChange = (e) => {
    console.log({ ...values.name });
    setValues({ ...values.name, [e.target.name]: e.target.value });
  };
  const handleListInput = (e) => {
    console.log(e.target);
  };
  return (
    <Wrapper>
      <main>
        <nav>
          <h4>Product Add</h4>
          <div className='btn-container'>
            <button type='button' className='save-btn'>
              Save
            </button>
            <Link type='button' className='cancel-btn' to='/'>
              Cancel
            </Link>
          </div>
        </nav>
        <form className='form' onSubmit={onSubmit}>
          <FormRow
            type='text'
            name='SKU'
            value={values.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
          <FormRow
            type='number'
            name='price'
            value={values.name}
            handleChange={handleChange}
          />
          <FormRowSelect
            labelText='Type switcher'
            name='type'
            value={values.name}
            list={values.list}
            handleChange={handleListInput}
          />
          <div className='dvd'>
            <FormRow
              type='text'
              name='size'
              value={values.name}
              handleChange={handleChange}
            />
          </div>
          <div className='furniture'>
            <FormRow
              type='text'
              name='height'
              value={values.name}
              handleChange={handleChange}
            />
            <FormRow
              type='text'
              name='width'
              value={values.name}
              handleChange={handleChange}
            />
            <FormRow
              type='text'
              name='length'
              value={values.name}
              handleChange={handleChange}
            />
          </div>
          <div className='dvd'>
            <FormRow
              type='text'
              name='weight'
              value={values.name}
              handleChange={handleChange}
            />
          </div>
        </form>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .save-btn {
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
  .cancel-btn {
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
    text-decoration: none;
  }
`;

export default AddProduct;
