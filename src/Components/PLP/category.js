import React from 'react'
import * as AllActions from '../../Action/action'
import {useDispatch} from 'react-redux'


const Category = ({item}) => {
    const dispatch = useDispatch();
    return (
        <li
            className="categoryItem"
            onClick={()=>dispatch(AllActions.setFilterData(item.id))} >
            {item.name}
        </li>
    )
}

export default Category
