import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import muneeb from './muneeb.jpg'

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
function About() {
    const classes = useStyles();

    return (
        <Card elevation={4} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={muneeb}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Software Developer
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        My name is Muneeb Ur Rehman and I completed my BSCS degree from Arid Agriculture Universtiy! This is my 3rd project of panacloud bootcamp 2020
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default About;
