import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_BEGIN,
  TOGGLE_PRODUCT,
  HANDLE_CHANGE,
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  CLEAR_VALUES,
} from './actions.js'
import { initialState } from './AppContext'

const reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      product: false,
      products: action.payload.products,
      totalProducts: action.payload.totalProducts,
      numOfPages: action.payload.numOfPages,
    }
  }
  if (action.type === TOGGLE_PRODUCT) {
    let arrayIDs = []
    let selectedProducts = state.products.map((product) => {
      if (product._id === action.payload.id) {
        return { ...product, select: !product.select }
      } else {
        return product
      }
    })
    selectedProducts.filter((product) => {
      if (product.select) {
        arrayIDs.push(product._id)
      }
    })
    return {
      ...state,
      products: selectedProducts,
      selectedItems: arrayIDs,
    }
  }
  if (action.type === DELETE_PRODUCT_BEGIN) {
    return {
      ...state,
    }
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    }
  }
  if (action.type === CREATE_PRODUCT_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === CREATE_PRODUCT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Job Created!',
      product: true,
    }
  }
  if (action.type === CREATE_PRODUCT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please, submit required data',
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      sku: '',
      name: '',
      price: '',
      size: '',
      height: '',
      width: '',
      length: '',
      weight: '',
      category: 'DVD',
    }
    return { ...state, ...initialState }
  }

  throw new Error(`no such action : ${action.type}`)
}

export default reducer
