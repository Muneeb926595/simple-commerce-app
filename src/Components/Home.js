import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BgVideo from './Shoes.mp4';

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
    bgvideo: {
        width: '100%',
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
            </p></div>
            </div>
            <div className={classes.particlesJs}></div>
            <video className={classes.bgvideo} loop autoPlay>
                <source src={BgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

    )
}

export default Home;