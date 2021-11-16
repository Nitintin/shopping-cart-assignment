import React from 'react'
import TextField from '@material-ui/core/TextField';
import * as AllAction from "../../Action/action";
import {useDispatch,useSelector} from 'react-redux'

const Login = () => {

    const dispatch = useDispatch();
    const userData =useSelector(state => state.registeredUsers);

    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        const email = e.target.elements[0].value;
        const pwd = e.target.elements[1].value;
        const validatedUser = userData.filter(item => item.email === email && item.password === pwd);
        if(validatedUser.length){
            console.log("welcome home ");
            dispatch(AllAction.LoginUser(email,pwd));
        }else{
            console.log("you imposter");
        }
    }
    return (
        <div className="loginWrapper">
            <div className="leftComponent">
                <h3>LOGIN</h3>
                <p>Get access to your orders, wishlist and recommendations</p>
            </div>
            <div className="rightComponent">
                <form onSubmit={(e)=>handleLoginSubmit(e)}>
                    <TextField
                        id="standard-email-input"
                        label="Email"
                        type="email"
                        autoComplete="current-email"
                    /><br />
                    <TextField
                        
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    /><br />
                    <button >LOGIN</button>
                </form>
            </div>
        </div>
    )
}

export default Login
