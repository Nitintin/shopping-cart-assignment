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
    productData:[],
    categoryData:[],
    cartData:{data:[],showCart:false},
    isLoading:false
}

export default defaultStore;