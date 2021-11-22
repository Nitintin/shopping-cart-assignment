
export function isLoading(defStore = false, action) {
    switch (action.type) {
        case "IS_LOADING": return  !defStore.isLoading;

        default: return defStore;
    }
}