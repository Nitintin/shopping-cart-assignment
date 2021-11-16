
export function cartReducer(cartData = {}, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const cartDataItems = cartData.data;
            let checkDuplicateItem = cartDataItems.filter(item => item.id === action.payload.id);
            if (checkDuplicateItem.length) {
                let currItemIndex = cartDataItems.findIndex(item => item.id === action.payload.id);

                return {
                    ...cartData, data: [
                        ...cartDataItems.slice(0, currItemIndex),
                        { ...cartDataItems[currItemIndex], count: cartDataItems[currItemIndex].count + 1 },
                        ...cartDataItems.slice(currItemIndex + 1)
                    ]
                }

            } else {
                action.payload.count = 1;
                return { ...cartData, data: [...cartDataItems, action.payload] };
            }

        case "DELETE_FROM_CART":
            const ItemCount = action.payload.count;
            if (ItemCount > 1) {
                let currItemIndex = cartData.data.findIndex(item => item.id === action.payload.id);

                return {
                    ...cartData, data: [
                        ...cartData.data.slice(0, currItemIndex),
                        { ...cartData.data[currItemIndex], count: cartData.data[currItemIndex].count - 1 },
                        ...cartData.data.slice(currItemIndex + 1)
                    ]
                }
            } else {
                let filteredData = cartData.data.filter(item => item.id !== action.payload.id);
                return { ...cartData, data: [...filteredData] };
            }

        case "SHOW_HIDE_CART":
            return { ...cartData, showCart: !cartData.showCart };

        case "ADD_TO_CART_SUCCESS":
            return { ...cartData, addSuccess:!cartData.addSuccess};
            
        default:
            return cartData
    }
}