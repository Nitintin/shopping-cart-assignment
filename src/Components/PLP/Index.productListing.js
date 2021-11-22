import React, { useEffect,useState } from 'react'
import ProductList from './ProductList'
import CategoryPanel from './categoryPanel'
import { useNavigate } from 'react-router';

const IndexproductListing = () => {
    let navigate = useNavigate();
    const [isLoading,setIsLoading]=useState(true);

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '625992014937-82ftomps5nv45jlo5q4as84q902f58kj.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                const auth = window.gapi.auth2.getAuthInstance();
                if (!auth.isSignedIn.get()) {
                    navigate('/login?error=loginRequired');
                }else{
                    setIsLoading(false);
                }
            })
        })
    }, [navigate]);

    if(isLoading){
        return ""
    }else{
        return (
            <main className="plp">
                <CategoryPanel />
                <ProductList />
            </main>
        )
    }
    
}

export default IndexproductListing
