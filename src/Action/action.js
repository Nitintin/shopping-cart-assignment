import axios from "axios";
const fetch_URL = "https://e8fca2cc-a38b-4bf2-82a3-c2cf40417ff9.mock.pstmn.io/";

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

export function setIsLoading(){
    return {type:"SET_IS_LOADING"}
}

export function addToCart(prodDetail){
    return {type:"ADD_TO_CART",payload:prodDetail}
}

export function deleteFromCart(prodDetail){
    return {type:"DELETE_FROM_CART",payload:prodDetail}
}

export function toggleCart(){
    return {type:"SHOW_HIDE_CART"}
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

                    case "product" : 
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