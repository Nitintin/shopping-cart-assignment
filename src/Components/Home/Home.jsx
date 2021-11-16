import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick";
import * as AllAction from "../../Action/action";

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
        <div className="homePage">
            <div className="SliderWrapper">
                <Slider {...settings}>
                    {showBanners()}
                </Slider>
            </div>

            
        </div>
    )
}

export default Home
