import { createStore,applyMiddleware,combineReducers } from 'redux'
import TaskReducer from './reducers/TaskReducer'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import UserReducer from './reducers/UserReducer'


const rootReducer = combineReducers({
    Task : TaskReducer,
    User : UserReducer
})

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));