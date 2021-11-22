import {registeredUsers} from './users.reducer'
import {combineReducers} from 'redux'
import {bannerReducer} from './banner.reducer'
import {categoryReducer} from './category.reducer'
import {productReducer} from './product.reducer'
import { isLoading } from './loading.reducer'
import {cartReducer} from './cart.reducer'

const rootReducer = combineReducers({ 
    registeredUsers: registeredUsers,
    bannerData:bannerReducer,
    productData:productReducer,
    categoryData:categoryReducer,
    cartData:cartReducer,
    isLoading:isLoading
});

export default rootReducer