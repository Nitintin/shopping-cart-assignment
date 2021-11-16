import axios from "axios";
const fetch_URL = "https://f437841f-2a31-4ffc-965e-67cc908e2c6c.mock.pstmn.io/";

export function RegisterUser() {
    return { type: "REGISTER_USER" }
}

export function LoginUser(email, pwd) {
    return { type: "LOGIN_USER", email, pwd }
}

export function LogoutUser() {
    return { type: "LOGOUT_USER" }
}

export function saveBannerData(data){
    return {type:"SAVE_BANNER_DATA",payload:data}
}

export function saveCategoryData(data){
    return {type:"SAVE_CATEGORY_DATA",payload:data}
}

export function saveProductData(data){
    return {type:"SAVE_PRODUCT_DATA",payload:data}
}

export function setFilterData(categoryName){
    return {type:"SET_FILTER_DATA",payload:categoryName}
}

export function removeFilter(){
    return {type:"REMOVE_FILTER"}
}

export function setIsLoading(){
    return {type:"SET_IS_LOADING"}
}

export function addToCart(prodDetail){
    return {type:"ADD_TO_CART",payload:prodDetail}
}

export function addToCartSuccess(){
    return {type:"ADD_TO_CART_SUCCESS"}
}
export function deleteFromCart(prodDetail){
    return {type:"DELETE_FROM_CART",payload:prodDetail}
}

export function toggleCart(){
    return {type:"SHOW_HIDE_CART"}
}

export function addToCartFromPLP(prodDetail){
    return function(dispatch){
        axios.post(fetch_URL+"addtocart")
        .then(response => {
            if(response.data.response==="Success"){
                dispatch(addToCartSuccess());
                dispatch(addToCart(prodDetail));
                setTimeout(()=>dispatch(addToCartSuccess()),1200)
            }else{
                console.log("Could not be added to cart");
            }
            
        }).catch(error => console.log(error.message));
    }
}

export function fetchData(endPoint) {
    return function (dispatch) {
        dispatch(setIsLoading());
        axios.get(fetch_URL + endPoint)
            .then(response => {
                const fetchData = response.data;
                switch(endPoint){
                    case "banners" : 
                        dispatch(setIsLoading());
                        dispatch(saveBannerData(fetchData));
                        break;

                    case "categories" : 
                        dispatch(setIsLoading());
                        dispatch(saveCategoryData(fetchData));
                        break;

                    case "products" : 
                        dispatch(setIsLoading());
                        dispatch(saveProductData(fetchData));
                        break;

                    default:
                        break;
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }
}