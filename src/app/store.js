/* global window:true */
import { createStore } from 'redux'
import reducers from './reducers'

/*
 * See https://github.com/zalmoxisus/redux-devtools-extension to add middleware
 * to the store working with redux-devtools-extension
 */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
