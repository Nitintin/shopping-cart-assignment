import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import * as AllActions from '../../Action/action'
import { useSelector, useDispatch } from 'react-redux'
import Product from './Product'

const ProductList = () => {
    const dispatch = useDispatch();
    let productData = useSelector(state => state.productData.data);
    const showCartSuccessMsg = useSelector(state => state.cartData.addSuccess);
    const isFiltered = useSelector(state => state.productData.isFiltered);
    const filterCategory = useSelector(state => state.productData.filterCategory);
    let cartDataVisible = "";
    if (showCartSuccessMsg) {
        cartDataVisible = "is-visible";
    }

    if (isFiltered) {
        productData = productData.filter(item => item.category === filterCategory);
    }

    useEffect(() => {
        dispatch(AllActions.fetchData("products"));
    }, [dispatch]);

    const showProducts = () => {
        const products = productData.map(item => <Product key={item.id} productDetail={item} />);
        return products;
    }

    return (
        <div className="listingSection">
            <Grid container className="productListing">
                {showProducts()}
                <div className={cartDataVisible + " addSuccessMsg"}>Product added to cart successfully</div>
            </Grid>
        </div>
    )
}

export default ProductList
