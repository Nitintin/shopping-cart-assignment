import React from 'react'
// import TextField from '@material-ui/core/TextField';
// import * as AllAction from "../../Action/action";
// import {useDispatch,useSelector} from 'react-redux'
import GoogleAuth from './GoogleAuth';

const Login = () => {

    // const dispatch = useDispatch();
    // const userData =useSelector(state => state.registeredUsers);

    // const handleLoginSubmit=(e)=>{
    //     e.preventDefault();
    //     const email = e.target.elements[0].value;
    //     const pwd = e.target.elements[1].value;
    //     const validatedUser = userData.filter(item => item.email === email && item.password === pwd);
    //     if(validatedUser.length){
    //         console.log("welcome home ");
    //         dispatch(AllAction.LoginUser(email,pwd));
    //     }else{
    //         console.log("you imposter");
    //     }
    // }

    return (
        <main className="loginWrapper">
            <>
                <article className="leftComponent">
                    <h3>LOGIN</h3>
                    <p>You need to sign in first, to see all the product listings!</p>
                </article>
            </>
            <div className="rightComponent">
                {/* <form onSubmit={(e)=>handleLoginSubmit(e)}>
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
                <div className="dividerText">or</div> */}
                <GoogleAuth/>
            </div>
            
        </main>
    )
}

export default Login
