import React, { useEffect } from "react"
import * as AllActions from '../../Action/action'
import {useSelector,useDispatch} from 'react-redux'

const CategoryPanel = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryData);

    useEffect(()=>{
        dispatch(AllActions.fetchData("categories"));
    },[dispatch])

    const showCategories=()=>{
        const category = categories.map(item => <li key={item.id} className="categoryItem" >
            {item.name}
        </li>);
        return category;
    }

    return (
        <ul className="categoryList">
            {showCategories()}
        </ul>
    )
}

export default CategoryPanel
