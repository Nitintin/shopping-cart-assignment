import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import * as AllActions from '../../Action/action'

const Header = () => {
    const cart = useSelector(state => state.cartData);
    let cartItemCount = 0;
    for (let i = 0; i < cart.data.length; i++) {
        cartItemCount += cart.data[i].count;
    }
    const dispatch = useDispatch();

    return (
        <header>
            <Grid className="headerWrapper bottomShadow" container>
                <Grid item xs={2}>
                    <img className="headerLogo" alt="site logo" src="static\images\logo_2x.png" />
                </Grid>
                <Grid className="navigationLinks" item xs={6}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Link to="/" onClick={() => dispatch(AllActions.removeFilter())}><span>Home</span></Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to="/products" onClick={() => dispatch(AllActions.removeFilter())}><span>Products</span></Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="headerCTA" item xs={3}>
                    <Link to="/login" className="headerSignOut">SignIn / SignOut</Link>
                    <div className="cartWrapper" onClick={() => dispatch(AllActions.toggleCart())}>
                        <div className="cartMsg">
                            <span>{cartItemCount}</span> items
                        </div>
                        <img className="cartIcon" alt="cart icon" src="static\images\cart.svg" width="22" />
                    </div>
                </Grid>
            </Grid>
        </header>
    )
}

export default Header
