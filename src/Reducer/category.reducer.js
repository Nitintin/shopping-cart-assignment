export function categoryReducer(defStore = [], action) {
    switch (action.type) {
        
        case "SAVE_CATEGORY_DATA":
            return [...action.payload];
        default: console.log("default category reducer");
            return defStore;
    }
}