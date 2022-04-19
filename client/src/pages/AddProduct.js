import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import FormRow from '../components/FormRow'
import FormRowSelect from '../components/FormRowSelect'
import { useState } from 'react'
import { validate } from '../functions/validate'

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
    addProduct,
    product,
    clearValues,
  } = useAppContext()

  const [formErrors, setFormErrors] = useState({})

  const removeAlerts = () => {
    setFormErrors({})
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (product) {
      setTimeout(() => {
        navigate('/')
        clearValues()
      }, 3000)
    }
  }, [product, navigate])

  const handleProductInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(
      validate({ sku, name, price, size, weight, length, width, height })
    )
    addProduct()
    setTimeout(() => {
      removeAlerts()
    }, 1000)
  }

  return (
    <Wrapper>
      <main>
        <nav>
          <h4>Product Add</h4>
          <div className='btn-container'>
            <button
              type='submit'
              className='save-btn'
              onClick={handleSubmit}
              id='product_form'
            >
              Save
            </button>
            <Link type='button' className='cancel-btn' to='/'>
              Cancel
            </Link>
          </div>
        </nav>
        <form className='form' id='product_form'>
          {<div className='alert'>{formErrors.sku}</div>}
          <FormRow
            id='sku'
            type='text'
            name='sku'
            value={sku}
            handleChange={handleProductInput}
          />

          {<div className='alert'>{formErrors.name}</div>}
          <FormRow
            id='name'
            type='text'
            name='name'
            value={name}
            handleChange={handleProductInput}
          />
          {<div className='alert'>{formErrors.price}</div>}
          <FormRow
            id='price'
            type='number'
            name='price'
            value={price}
            handleChange={handleProductInput}
          />
          <FormRowSelect
            id='productType'
            labelText='Type switcher'
            name='category'
            value={category}
            list={list}
            handleChange={handleProductInput}
          />
          {category === 'DVD' && (
            <div className='dvd' id='DVD'>
              <p>Please provide size in MB</p>
              {<div className='alert'>{formErrors.size}</div>}
              <FormRow
                type='text'
                name='size'
                value={size}
                handleChange={handleProductInput}
              />
            </div>
          )}
          {category === 'Furniture' && (
            <div className='furniture' id='Furniture'>
              <p>Please provide dimensions in HxWxL format</p>
              {<div className='alert'>{formErrors.height}</div>}
              <FormRow
                type='number'
                name='height'
                value={height}
                handleChange={handleProductInput}
              />
              {<div className='alert'>{formErrors.width}</div>}
              <FormRow
                type='number'
                name='width'
                value={width}
                handleChange={handleProductInput}
              />
              {<div className='alert'>{formErrors.length}</div>}
              <FormRow
                type='number'
                name='length'
                value={length}
                handleChange={handleProductInput}
              />
            </div>
          )}
          {category === 'Book' && (
            <div className='book' id='Book'>
              <p>Please provide weight in KG</p>
              {<div className='alert'>{formErrors.weight}</div>}
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
  .sku {
    text-transform: uppercase;
  }
`

export default AddProduct
