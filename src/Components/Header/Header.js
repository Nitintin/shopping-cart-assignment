import React from 'react'
import logo from "../../static/images/logo_2x.png";
import Cart from '../../static/images/cart.svg';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import * as AllActions from '../../Action/action'

const Header = () => {
    const cart = useSelector(state=>state.cartData);
    let cartItemCount=0;
    for(let i=0;i<cart.data.length;i++){
        cartItemCount += cart.data[i].count;
    }
    const dispatch = useDispatch();

    return (
        <Grid className="headerWrapper bottomShadow" container>
            <Grid item xs={2}>
                <img className="headerLogo" alt="site logo" src={logo}/>
            </Grid>
            <Grid className="navigationLinks" item xs={6}>
                <Grid container>
                    <Grid item xs={6}>
                        <Link to="/"><span>Home</span></Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to="/products"><span>Products</span></Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <div className="cartWrapper" onClick={()=>dispatch(AllActions.toggleCart())}>
                    
                    <div className="cartMsg">
                        <span>{cartItemCount}</span>items
                    </div>
                    <img className="cartIcon" alt="cart icon" src={Cart} width="30"/>
                </div>
            </Grid>
        </Grid>
    )
}

export default Header
