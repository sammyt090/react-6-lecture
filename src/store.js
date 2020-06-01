import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './ducks/userReducer'
import productsReducer from './ducks/productsReducer'


const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer
})
export default createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(promiseMiddleware)))