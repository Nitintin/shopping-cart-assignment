import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import * as AllActions from '../../Action/action'
import {useSelector,useDispatch} from 'react-redux'
import Product from './Product'

const ProductList = () => {
    const dispatch = useDispatch();
    const productData = useSelector(state => state.productData);

    useEffect(()=>{
        dispatch(AllActions.fetchData("product"));
    },[dispatch]);

    const showProducts=()=>{
        const products = productData.map(item => <Product key={item.id} productDetail={item}/>);
        return products;
    }

    return (
        <div className="listingSection">
            <Grid container className="productListing">
                {showProducts()}
            </Grid>
        </div>
    )
}

export default ProductList
