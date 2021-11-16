import React from 'react'
import ProductList from './ProductList'
import CategoryPanel from './categoryPanel'

const IndexproductListing = () => {
    return (
        <div className="plp">
            <CategoryPanel/>
            <ProductList/>
        </div>
    )
}

export default IndexproductListing
