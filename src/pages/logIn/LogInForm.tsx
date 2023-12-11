import React from "react";
import { Grid, Slider, makeStyles} from "@material-ui/core";
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import logo from "../../assets/images/logo-the-gioi-di-dong-mwg.png"
import Image6 from "../../assets/images/Image6.png";
import Image7 from "../../assets/images/Image7.png";
const LogInForm = ()=>{
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const slides =()=>{
        return(
            <Slider {...settings}>
                <div>
                    <img src={Image6} alt="img 1" />
                </div>
                <div>
                    <img src={Image7} alt="img 2" />
                </div>
            </Slider>
        )
      };
    // const slides = images.map((image)=>{
    //     <Slider {...settings}>
    //         <img src={image}/>
    //     </Slider>
    // });
    return(
        <>
            <Grid container className={classes.header}>
                <Grid item container xs={2}>
                    <img src={logo} className={classes.imgLogo}/>
                    <strong className={classes.titleLogo}>MWG</strong>
                </Grid>
                <Grid item container xs={10}></Grid>
            </Grid>
            <Grid container className={classes.body}>
                <Grid item container xs={6} className={classes.carousel}>
                    {/* <slides></slides> */}
                </Grid>
                <Grid item container xs={6}></Grid>
            </Grid>
        </>
    )
}
export default LogInForm;
const useStyles = makeStyles(() => ({
    header:{
        margin: "10px",
        paddingBottom: "5px",
        borderBottom: "1px solid #E1DEE8",
    },
    imgLogo:{
        height: "30px",
    },
    titleLogo: {
        padding: "5px 10px",
    },
    body:{
        margin: "10px",
    },
    carousel:{
        width: '80%', // Adjust the width as needed
        margin: 'auto',
    }
}));