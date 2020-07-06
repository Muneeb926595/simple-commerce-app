import React from 'react';
import Shoes from '../Shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        "&:hover": {
            backgroundColor: "#e0e0e0"
        }
    },
    productImage: {
        width: "250px",
        height: "250px"
    }
}));


function Product() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={3} style={{ marginTop: "2em" }}>
                {Object.keys(Shoes).map((product, index) => {
                    return (
                        <Grid item xs={12} md={4} key={index}>
                            <Link to={`/product/${product}`}>
                                <Paper elevation={4} className={classes.paper}>
                                    <h2>{Shoes[product].name}</h2>
                                    <img alt="product image" src={Shoes[product].img} className={classes.productImage} />
                                </Paper>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </React.Fragment>
    )
}

export default Product;

