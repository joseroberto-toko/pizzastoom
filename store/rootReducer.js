import { combineReducers } from '@reduxjs/toolkit'
import StoomApp from './stoom'


const createReducer = asyncReducers =>
	combineReducers({
        StoomApp,
		...asyncReducers
	})

export default createReducer