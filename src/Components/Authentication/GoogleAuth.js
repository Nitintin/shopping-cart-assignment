import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router';

const GoogleAuth = () => {
    const [isSignedIn,setIsSignedIn] = useState(null);
    let navigate = useNavigate();
    
    useEffect(()=>{
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'625992014937-82ftomps5nv45jlo5q4as84q902f58kj.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                const auth = window.gapi.auth2.getAuthInstance();
                setIsSignedIn(auth.isSignedIn.get());
                auth.isSignedIn.listen(checkAuthStateChange)
            })
        })
    });

    const checkAuthStateChange = ()=>{
        const auth = window.gapi.auth2.getAuthInstance();
        setIsSignedIn(auth.isSignedIn.get());
        if(auth.isSignedIn.get()){
            navigate('/products');
        }
    }

    const handleSignIn=()=>{
        const auth = window.gapi.auth2.getAuthInstance();
        if(auth.isSignedIn.get()){
            auth.signOut();
        }else{
            auth.signIn();
        }
        
    }

    const renderAuthText = ()=>{
        if(isSignedIn===null){
            return null
        }
        else if(isSignedIn){
            return <button className="signOutBtn" onClick={handleSignIn}>Sign Out</button>
        }else{
            return <button className="signInBtn" onClick={handleSignIn}>Sign in with google <i className="fab fa-google"></i></button>
        }
    }
    return (
        <div className="googleAuthWrapper">
            {renderAuthText()}
        </div>
    )
}

export default GoogleAuth
