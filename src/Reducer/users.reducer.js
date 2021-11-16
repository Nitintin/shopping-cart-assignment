export function registeredUsers(defStore = [], action) {
    switch (action.type) {
        case "REGISTER_USER": console.log("register user reducer");
            return defStore;
        case "LOGIN_USER":
            console.log("user reducer")
            localStorage.setItem("logedIn",action.email);
            return defStore;
        default: console.log("default user reducer");
            return defStore;
    }
}