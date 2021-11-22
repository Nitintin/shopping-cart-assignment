let defaultStore = {
    registeredUsers : [
        { 
            email:"test@test.com",
            password:12345
        },
        {
            email:"test2@test.com",
            password:"qwerty"
        }
    ],
    bannerData:[],
    productData:{data:[],isFiltered:false,filterCategory:""},
    categoryData:[],
    cartData:{data:[],showCart:false,addSuccess:false},
    isLoading:false,
    isSignedIn:false
}

export default defaultStore;