import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as AllActions from '../../Action/action'

const Cart = () => {
    const cartData = useSelector(store => store.cartData);
    let cartItemCount = 0;
    for (let i = 0; i < cartData.data.length; i++) {
        cartItemCount += cartData.data[i].count;
    }
    const dispatch = useDispatch();
    return (
        <div className="cartDisplay">
            {
                cartData.showCart ?
                    <section className="MiniCartWrapper">
                        <div className="cartHeading">
                            <div className="headerTxt">
                                My Cart ( {cartItemCount} items)
                            </div>
                            <span className="closeCartBtn" onClick={() => dispatch(AllActions.toggleCart())}>X</span>
                        </div>
                        {   cartItemCount ?
                            <>
                                <ul className="cartList">
                                    {cartData.data.map(item => <li className="cartItem" key={item.id}>
                                        <div className="cartImgCotainer">
                                            <img src={item.imageURL} alt="cart product" />
                                        </div>
                                        <div className="cartItemDetail">
                                            <div className="description"><b>{item.name}</b></div>
                                            <div className="cartItemQuantity">
                                                <div
                                                    className="deleteFromCartBtn cartCTA"
                                                    onClick={() => dispatch(AllActions.deleteFromCart(item))}
                                                >
                                                    -
                                                </div>
                                                <div className="count">{item.count}</div>
                                                <div
                                                    className="addToCartBtn cartCTA"
                                                    onClick={() => dispatch(AllActions.addToCart(item))}
                                                >
                                                    +
                                                </div>
                                                <span className="crossSign"> X </span>
                                                <div className="singleItemPrice"> Rs. {item.price}</div>
                                                <div className="totalItemPrice"> Rs. {item.price * item.count}</div>
                                            </div>


                                        </div>
                                    </li>)}
                                </ul>
                                <div className="lowPrice">
                                    <div className="imgContainer">
                                        <img src="static\images\lowest-price.png" alt="low price" />
                                    </div>
                                    <span>You wont find it cheaper anywhere</span>
                                </div>
                                <div className="proceedWrapper">
                                    <span>Promo code can be applied on promo page</span>
                                    <button className="checkoutBtn">PROCEED TO CHECKOUT <i class="fas fa-arrow-right"></i></button>
                                </div>
                            </>
                            :
                            <div className="emptyCartMsg">
                                <b>No items in your cart</b>
                                <br />
                                <small>Your favourite items just a click away</small>
                            </div>
                        }
                    </section>
                    : ""
            }
        </div>

    )
}

export default Cart
