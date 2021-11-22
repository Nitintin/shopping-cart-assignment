export function isSignedIn(currState = false, action) {
    switch (action.type) {
        case "SIGN_IN_CLICK":
            return true;

        case "SIGN_OUT_CLICK":
            return false;

        case "CHECK_LOGIN_CHANGE":
            return action.payload;

        default:
            return false
    }
}

