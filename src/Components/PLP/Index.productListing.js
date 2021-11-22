import React from 'react'
import ProductList from './ProductList'
import CategoryPanel from './categoryPanel'
import { Navigate } from 'react-router'

const IndexproductListing = () => {
    const auth = window.gapi.auth2.getAuthInstance();

    const checkAuthentication = () => {

        if (auth.isSignedIn.get()) {
            return <>
                        <main className="plp">
                            <CategoryPanel />
                            <ProductList />
                        </main>
                    </>
        } else {
            return <Navigate to="/login" />
        }

    }

    return (
        checkAuthentication()
    )
}

export default IndexproductListing
