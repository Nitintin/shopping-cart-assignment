export function productReducer(defStore = [], action) {
    switch (action.type) {
        case "SAVE_PRODUCT_DATA": console.log("SAVE_PRODUCT_DATA reducer");
            return [...action.payload];

        default: console.log("default product reducer");
            return defStore;
    }
}