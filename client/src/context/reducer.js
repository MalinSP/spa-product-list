import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_BEGIN,
  TOGGLE_PRODUCT,
  HANDLE_CHANGE,
  SHOW_HIDE,
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
} from './actions.js'

const reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
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

  throw new Error(`no such action : ${action.type}`)
}

export default reducer
