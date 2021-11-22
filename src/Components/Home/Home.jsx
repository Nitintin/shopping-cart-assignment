import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick";
import * as AllAction from "../../Action/action";
import { Link } from 'react-router-dom'
//625992014937-82ftomps5nv45jlo5q4as84q902f58kj.apps.googleusercontent.com
const Home = () => {
    const dispatch = useDispatch();
    const bannerData = useSelector(state => state.bannerData);

    useEffect(() => {
        dispatch(AllAction.fetchData("banners"));
    }, [dispatch]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const showBanners = () => {
        const banners = bannerData.map(item => (
            <div key={item.id} className="bannerImgWrapper" >
                <img
                    src={item.bannerImageUrl}
                    alt={item.bannerImageAlt}
                    className="bottomShadow"
                />
            </div>));
        return banners;
    }

    return (
        <>
            <main className="homePage">
                <section>
                    <article>
                        <div className="SliderWrapper">
                            <Slider {...settings}>
                                {showBanners()}
                            </Slider>
                        </div>
                    </article>
                </section>
                <section>
                    <div className="categoryRecomendations">
                        <article>
                            <div className="fruitHome bottomShadow homeCategory">
                                <div className="homeCategoryImg">
                                    <img src="static\images\category\fruits.png" alt="fruits" />
                                </div>
                                <div className="homeCategoryText">
                                    <div className="heading">Fruit & Vegetables</div>
                                    <div className="description">A variety of frsh fruit and vegetables</div>
                                    <div className="homeCatLink">
                                        <Link to="/products" onClick={() => dispatch(AllAction.setFilterData("5b6899953d1a866534f516e2"))}>Explore fruit and vegetables</Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="bakeryHome bottomShadow homeCategory">

                                <div className="homeCategoryText">
                                    <div className="heading">Bakery Cakes & Dairy</div>
                                    <div className="description">The best cupcakes, cookies, cakes, pie,chhesecake, freshbread,fresh coffee, milk & more</div>
                                    <div className="homeCatLink">
                                        <Link to="/products" onClick={() => dispatch(AllAction.setFilterData("5b6899123d1a866534f516de"))}>Explore Bakery</Link>
                                    </div>
                                </div>
                                <div className="homeCategoryImg">
                                    <img src="static\images\category\bakery.png" alt="bakery" />
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="beverageHome bottomShadow homeCategory">
                                <div className="homeCategoryImg">
                                    <img src="static\images\category\beverages.png" alt="beverages" />
                                </div>
                                <div className="homeCategoryText">
                                    <div className="heading">Beverages</div>
                                    <div className="description">Our beverages department will ensure that your fridge is always fully stocked. Shop for juice, soda & more</div>
                                    <div className="homeCatLink">
                                        <Link to="/products" onClick={() => dispatch(AllAction.setFilterData("5b675e5e5936635728f9fc30"))}>Explore beverages</Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="beautyHome bottomShadow homeCategory">

                                <div className="homeCategoryText">
                                    <div className="heading">Beauty & Hygiene</div>
                                    <div className="description">Buy beauty and personal care products online in india at best prices</div>
                                    <div className="homeCatLink">
                                        <Link to="/products" onClick={() => dispatch(AllAction.setFilterData("5b68994e3d1a866534f516df"))}>Explore Beauty</Link> </div>
                                </div>
                                <div className="homeCategoryImg">
                                    <img src="static\images\category\beauty.png" alt="beauty" />
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="babyHome bottomShadow homeCategory">
                                <div className="homeCategoryImg">
                                    <img src="static\images\category\baby.png" alt="baby" />
                                </div>
                                <div className="homeCategoryText">
                                    <div className="heading">Baby Care</div>
                                    <div className="description">Shop online for baby products, diapers, skin cares products etc</div>
                                    <div className="homeCatLink">
                                        <Link to="/products" onClick={() => dispatch(AllAction.setFilterData("5b6899683d1a866534f516e0"))}>Explore Baby</Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
