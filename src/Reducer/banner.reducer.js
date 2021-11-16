
export function bannerReducer(banners = [], action) {
    switch (action.type) {
        case "SAVE_BANNER_DATA": 
            return  [...action.payload];

        default: return banners;
    }
}