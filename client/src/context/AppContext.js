import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import reducer from './reducer.js'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_BEGIN,
  TOGGLE_PRODUCT,
  HANDLE_CHANGE,
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
} from './actions.js'

const AppContext = React.createContext()

const initialState = {
  isLoading: false,
  showAlert: false,
  products: [],
  totalProducts: 0,
  numOfPages: 1,
  selectedItems: [],
  sku: '',
  name: '',
  price: '',
  size: '',
  height: '',
  width: '',
  length: '',
  weight: '',
  category: '',
  category: 'DVD',
  list: ['DVD', 'Furniture', 'Book'],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const authFetch = axios.create({
    baseURL: '/api/v1',
  })

  const getProducts = async () => {
    let url = '/'
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const { data } = await authFetch(url)
      const { products, totalProducts, numOfPages } = data
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { products, totalProducts, numOfPages },
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  const toggleProduct = (e) => {
    const id = e.target.id
    dispatch({ type: TOGGLE_PRODUCT, payload: { id } })
  }

  const deleteProduct = async (selectedItems) => {
    dispatch({ type: DELETE_PRODUCT_BEGIN })
    try {
      await axios.delete(`http://localhost:5000/api/v1/${selectedItems}`)
      getProducts()
    } catch (error) {
      console.log(error.response)
    }
  }

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }
  const addProduct = async () => {
    dispatch({ type: CREATE_PRODUCT_BEGIN })
    try {
      const {
        sku,
        name,
        price,
        size,
        weight,
        height,
        width,
        length,
        category,
      } = state

      if (category === 'DVD') {
        await axios.post('http://localhost:5000/api/v1/add-product', {
          sku,
          name,
          price,
          size,
          category,
        })
      }
      if (category === 'Book') {
        await axios.post('http://localhost:5000/api/v1/add-product', {
          sku,
          name,
          price,
          weight,
          category,
        })
      }
      if (category === 'Furniture') {
        await axios.post('http://localhost:5000/api/v1/add-product', {
          sku,
          name,
          price,
          height,
          width,
          length,
          category,
        })
      }
      dispatch({ type: CREATE_PRODUCT_SUCCESS })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_PRODUCT_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // const { name, email, password, isMember } = values
    // if (!email || !password || (!isMember && !name)) {
    //   // displayAlert()
    //   console.log('Empty values')
    //   return
    // }
    // console.log(values)
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        getProducts,
        deleteProduct,
        toggleProduct,
        handleChange,
        onSubmit,
        addProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
