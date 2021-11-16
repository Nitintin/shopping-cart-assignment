import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as AllActions from '../../Action/action'

const Overlay = () => {
    let overlayClass;
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.cartData.showCart);
    showCart ? overlayClass = "overlayVisible " : overlayClass = "";
    return (
        <div className={overlayClass + " overlayContainer"} onClick={() => dispatch(AllActions.toggleCart())}></div>
    )
}

export default Overlay
