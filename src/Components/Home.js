import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import indoor from './indoor.png'

const useStyles = makeStyles((theme) => ({
    firstDiv: {
        position: "absolute",
        zIndex: "2",
        left: "32%",
        top: "40%",
        maxWidth: "640px",
        minWidth: "640px",
        width: "640px",
        color: "white",
    },
    firstH1: {
        fontSize: "50px",
        margin: 0
    },
    mybutton: {
        color: "white",
        backgroundColor: "transparent",
        backgroundImage: "none",
        borderColor: "white",

        display: "inline-block",
        fontWeight: "400",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        userSelect: "none",
        border: "1px solid transparent",
        padding: "0.7rem 1rem",
        fontSize: "1rem",
        lineHeight: 1.5,
        borderRadius: ".25rem",
        transition: "color .15s ease-in-out",
        "&:hover":{
            transform: "Scale(1.2)",
        }
    },
    particlesJs: {
        backgroundImage: `url(${indoor})`,
        color: "rgba(0,0,0, 0.6)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "92vh"
    }
}
));

function Home() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.firstDiv}>
                <div style={{ textAlign: "center" }}>
                    <h1 className={classes.firstH1}>Smart Shopping</h1>
                    <p >With Smart Retail’s System, you can seamlessly update all your Offers with new content, videos, images and text.
                    Regardless of whether you have one Store or one thousand, you can manage them all from one computer.
            </p><button className={classes.mybutton} type="button">Learn More</button></div>
            </div>
            <div className={classes.particlesJs}></div>
        </div>
    )
}

export default Home;