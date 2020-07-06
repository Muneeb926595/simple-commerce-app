import React from 'react';
import {useParams} from 'react-router-dom';
import Shoes from '../Shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin:"auto",
        marginTop:"2rem"
    },
    media: {
        height: "350px",
        backgroundRepeat:"no-repeat",
        backgroundSize:"center",
        backgroundOrigin:"center",
        backgroundPosition:"top",
        transition:"all 0.5s",
        "&:hover":{
            transform: "translateY(-10px)",
        }
    },
});
function ProductItem(){
    const {id}=useParams();
    const shoe=Shoes[id]
    const classes=useStyles();
    if(!shoe)
        return <h2>Product Not Found !</h2>

    return(
        <Card elevation={4} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={shoe.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {shoe.name}
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Some Random text about shoes that are just arrived in the markete. It's quality is vey good and pure elastic we are sure that your will like it very much!!
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductItem;