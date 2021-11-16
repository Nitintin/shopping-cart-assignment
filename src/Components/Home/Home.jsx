import React, { useEffect } from 'react'
import banner from '../../static/images/offers/offer1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import * as AllAction from "../../Action/action";

const Home = () => {
    const dispatch = useDispatch();
    const bannerData = useSelector(state => state.bannerData);

    useEffect(()=>{
        dispatch(AllAction.fetchData("banners"));
    },[dispatch]);
    
    
    const showBanners = () => {
        const banners = bannerData.map(item => (<div key={item.id} className="bannerImgWrapper" >
            <img src={banner} alt={item.bannerImageAlt} className="bottomShadow" width="1200" />
        </div>));
        return banners;
    }

    return (
        <div>
            {showBanners()}
        </div>
    )
}

export default Home
