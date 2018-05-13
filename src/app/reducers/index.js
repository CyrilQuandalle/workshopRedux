import { combineReducers } from 'redux'
import formReducer from '../../form/reducer'
import listReducer from '../../list/reducer'

export default combineReducers({ formReducer, listReducer })
