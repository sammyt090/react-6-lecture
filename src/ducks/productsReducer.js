import axios from 'axios'

const initialState = {
    products: [],
    product: {},
    isLoading: false,
}

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
const GET_PRODUCTS_BY_ID = 'GET_PRODUCTS_BY_ID'

export function getAllProducts(){
    const payload = axios.get('/api/products')

    return{
        type: GET_ALL_PRODUCTS,
        payload: payload
    }
    
}


export default function(state = initialState, action ){
    switch(action.type) {
        case GET_ALL_PRODUCTS + '_PENDING':
            return {...state, isLoading: true}
        case GET_ALL_PRODUCTS + '_FULFILLED':
            return {...state, products: action.payload.data, isLoading: false}
        case GET_ALL_PRODUCTS + '_REJECTED':
            return {...state, isLoading: false}
        default:
            return state
    }
}