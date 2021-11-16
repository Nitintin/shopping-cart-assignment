import defaultStore from '../Store/initialStore'

export function isLoading(defStore = defaultStore, action) {
    switch (action.type) {
        case "IS_LOADING": return  !defStore.isLoading;

        default: return defStore;
    }
}