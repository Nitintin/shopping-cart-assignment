import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../Reducer/rootReducer';
import thunkMiddleWare from "redux-thunk";
import defaultStore from './initialStore'

let store = createStore(rootReducer,defaultStore,applyMiddleware(thunkMiddleWare));

export default store;
