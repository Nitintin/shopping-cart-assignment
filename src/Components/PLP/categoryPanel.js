import React, { useEffect } from "react"
import * as AllActions from '../../Action/action'
import { useSelector, useDispatch } from 'react-redux'
import Category from "./category";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const CategoryPanel = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryData);

    useEffect(() => {
        dispatch(AllActions.fetchData("categories"));
    }, [dispatch])

    const showCategories = () => {
        const category = categories.map(item => <Category key={item.id} item={item} />);
        return category;
    }

    return (
        <div className="categoryPanel">
            <ul className="desktopCategoryList categoryList">
                {showCategories()}
            </ul>
            <div className="mobileCategoryList">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="accordionSummary"
                    >
                        <Typography>Category List</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordionDetails">
                        {
                            <ul className="categoryList">
                                {showCategories()}
                            </ul>
                        }
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default CategoryPanel
