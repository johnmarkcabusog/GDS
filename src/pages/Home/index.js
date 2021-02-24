import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import {makeStyles, createStyles} from "@material-ui/styles"
import Background from "./assets/aerial-background.jpg"
import Header from "../Header"
import Newsbites from "./components/Newsbites"
import Footer from "../Footer"
import Gallery from "../Gallery"


const useStyles = makeStyles((theme: Theme) => createStyles({
  bg: {
    backgroundImage: `url(${Background})`,
    width:"100%",
    overflow: "auto",
    position:"fixed",
    height:"100%",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    top:0,
    backgroundSize:'cover',
  },
  newsbites:{
      height: 400,
      width:"100%",
      backgroundColor:"#0CC6C7"
  },
  mainPanel:{
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  gallery:{
    width:"100%",
    height:400,
    backgroundColor:"white"
  },
  button:{
    fontSize: 25,
    paddingLeft: 30,
    paddingRight: 30,
    color:"white",
    marginTop:20,
    borderRadius:3,
    fontStyle:"italic",
    backgroundColor: "#0CC6C7",
  },
  panelTitle:{
    fontSize:30,
    padding:10,
    color:"white",
  }
}))

const Home = () =>{
    const classes = useStyles();

    return(
        <div className={classes.bg}>
            <Grid container>
            <Header/>
                <Grid item xs={12} sm={4} >
                  <Grid container  spacing={0}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    style={{ minHeight: '70vh' }}>
                        <Grid item xs={12}>
                            <Typography style={{fontStyle:"bold", fontSize:40, color:"white"}}>
                                Travel.Live.Breathe.
                            </Typography>
                            <Typography style={{fontStyle:"italic", fontSize:20, color:"white"}}>
                                Experience great life adventures.
                            </Typography>
                            <Button className={classes.button}>
                             SIGN UP TODAY
                         </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8} style={{background: 'linear-gradient(90deg, transparent 30%,#08a0a0 60%)', opacity:"40%"}}>
                  
                </Grid>
                <Grid item xs={12} className={classes.newsbites}>
                    <Grid container>
                        <Grid item xs={12}>
                                <Typography className={classes.panelTitle}> Why Book with Us?  </Typography>

                                <Divider/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.gallery}>
                        <Grid container>
                           <Grid item xs={12} sm={6}>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {/* <Gallery/> */}
                            </Grid> 
                        </Grid>
                    </div>    
                </Grid>
                <Grid item xs={12}>
                        <Footer/>   
                </Grid>   
            </Grid>
        </div>
    )
}

export default Home