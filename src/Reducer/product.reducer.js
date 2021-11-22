export function productReducer(productData = {}, action) {
    switch (action.type) {
        case "SAVE_PRODUCT_DATA": 
            return {...productData,data:action.payload};

        case "SET_FILTER_DATA":
            return {...productData,isFiltered:true,filterCategory:action.payload}

        case "REMOVE_FILTER":
            return {...productData,isFiltered:false,filterCategory:""}

        default:
            return productData;
    }
}