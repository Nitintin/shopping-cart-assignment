import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Coke from '../../static/images/products/beverages/coke.jpg'
import { useDispatch } from 'react-redux'
import * as AllActions from '../../Action/action'

const Product = ({ productDetail }) => {
    const dispatch = useDispatch();

    return (
        <Grid className="productCard" item xs={3}>
            <Card >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h3" className="productHeading">
                            {productDetail.name}
                        </Typography>
                        <CardMedia
                            image={Coke}
                            title={productDetail.name}
                            className="productImg"
                        />
                        <Typography variant="body2" color="textSecondary" component="p">
                            {productDetail.description.slice(0, 85)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="productActionArea">
                    <Typography >
                       <small> MRP Rs.{productDetail.price}</small>
                    </Typography>
                    <Button size="small" className="addToBagBtn" onClick={() => dispatch(AllActions.addToCartFromPLP(productDetail))}>
                        Buy Now
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product
