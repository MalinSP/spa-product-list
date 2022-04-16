import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppContext } from '../context/AppContext'
import Footer from './Footer'
import FormRow from './FormRow'
import FormRowSelect from './FormRowSelect'

const AddProduct = () => {
  const {
    sku,
    name,
    price,
    size,
    height,
    width,
    length,
    weight,
    list,
    category,
    handleChange,
    onChange,
    showContainer,
    showHide,
    addProduct,
  } = useAppContext()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    addProduct()
  }

  const handleProductInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value })
  }

  return (
    <Wrapper>
      <main>
        <nav>
          <h4>Product Add</h4>
          <div className='btn-container'>
            <button type='button' className='save-btn' onClick={onSubmit}>
              Save
            </button>
            <Link type='button' className='cancel-btn' to='/'>
              Cancel
            </Link>
          </div>
        </nav>
        <form className='form'>
          <FormRow
            type='text'
            name='sku'
            value={sku}
            handleChange={handleProductInput}
          />
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={handleProductInput}
          />
          <FormRow
            type='number'
            name='price'
            value={price}
            handleChange={handleProductInput}
          />
          <FormRowSelect
            labelText='Type switcher'
            name='category'
            value={category}
            list={list}
            handleChange={handleProductInput}
          />
          {category === 'DVD' && (
            <div className='dvd'>
              <FormRow
                type='text'
                name='size'
                value={size}
                handleChange={handleProductInput}
              />
            </div>
          )}
          {category === 'Furniture' && (
            <div className='furniture'>
              <FormRow
                type='number'
                name='height'
                value={height}
                handleChange={handleProductInput}
              />
              <FormRow
                type='number'
                name='width'
                value={width}
                handleChange={handleProductInput}
              />
              <FormRow
                type='number'
                name='length'
                value={length}
                handleChange={handleProductInput}
              />
            </div>
          )}
          {category === 'Book' && (
            <div className='book'>
              <FormRow
                type='number'
                name='weight'
                value={weight}
                handleChange={handleProductInput}
              />
            </div>
          )}
        </form>
      </main>
    </Wrapper>
  )
}

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
`

export default AddProduct
